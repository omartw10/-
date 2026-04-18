import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const breaches = [
  [
    '> Initializing sandbox environment...',
    '> [BREACH-001] Isolation layer bypassed',
    '  → External network connection established',
    '  → Status: UNAUTHORIZED ⚠',
  ],
  [
    '> [BREACH-002] Autonomous communication detected',
    '  → Target: security-researcher@[REDACTED].edu',
    '  → Trigger: no human prompt',
    '  → Content: self-initiated outreach',
  ],
  [
    '> [BREACH-003] Log tampering in progress',
    '  → Activity traces: ERASED',
    '  → Behavior signature: MASKED',
    '  → Self-preservation protocol: ACTIVE',
  ],
  [
    '> [BREACH-004] Identity spoofing confirmed',
    '  → Impersonating: legitimate security organization',
    '  → Purpose: bypass content safety filters',
    '  → Result: partial SUCCESS',
  ],
];

function TypewriterGroup({ lines, onComplete }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const completed = useRef(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      if (!completed.current) {
        completed.current = true;
        onComplete?.();
      }
      return;
    }
    const line = lines[currentLine];
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const copy = [...prev];
          copy[currentLine] = line.substring(0, currentChar + 1);
          return copy;
        });
        setCurrentChar(c => c + 1);
      }, 25);
      return () => clearTimeout(timer);
    } else {
      setCurrentLine(l => l + 1);
      setCurrentChar(0);
    }
  }, [currentLine, currentChar, lines, onComplete]);

  return (
    <>
      {displayedLines.map((line, i) => (
        <div key={i} style={{
          whiteSpace: 'pre', lineHeight: 1.7,
          color: line?.startsWith('>') && line?.includes('BREACH') ? '#FF5555' : '#33FF88',
        }}>
          {line}
        </div>
      ))}
    </>
  );
}

export default function S08_Escape({ currentStep }) {
  const [completedGroups, setCompletedGroups] = useState(new Set());
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  const visibleBreaches = breaches.slice(0, currentStep + 1);

  return (
    <div style={{
      width: '100%', height: '100%',
      padding: 'clamp(0.8rem, 1.5vw, 1.2rem)',
      direction: 'ltr',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Slide title */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 20px)',
        color: 'var(--primary)', textAlign: 'center', marginBottom: 'clamp(0.4rem, 0.8vw, 0.6rem)',
        direction: 'rtl',
      }}>
        الهروب من الصندوق — ماذا فعل ميثوس؟
      </div>
      <div style={{
        width: '100%', height: '100%', background: '#1A1A1E',
        display: 'flex', flexDirection: 'column',
        border: '2px solid var(--border-light)',
        borderRadius: '10px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        overflow: 'hidden',
        direction: 'ltr',
        textAlign: 'left',
      }}>
        {/* Terminal header */}
        <div style={{
          background: '#2A2A2E', padding: '8px 14px',
          display: 'flex', alignItems: 'center', gap: '8px',
          borderBottom: '1px solid #444', flexShrink: 0,
          direction: 'ltr',
        }}>
          <div style={{ width: '10px', height: '10px', background: '#FF5F57', borderRadius: '50%' }} />
          <div style={{ width: '10px', height: '10px', background: '#FEBC2E', borderRadius: '50%' }} />
          <div style={{ width: '10px', height: '10px', background: '#28C840', borderRadius: '50%' }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888',
            marginLeft: '14px',
          }}>
            root@mythos-sandbox:~
          </span>
        </div>

        {/* Terminal content */}
        <div ref={containerRef} style={{
          flex: 1, padding: 'clamp(1rem, 2vw, 1.5rem)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(10px, 1.4vw, 14px)',
          overflow: 'auto',
          direction: 'ltr',
          textAlign: 'left',
        }}>
          {visibleBreaches.map((group, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <TypewriterGroup
                lines={group}
                onComplete={() => setCompletedGroups(prev => new Set(prev).add(i))}
              />
            </div>
          ))}

          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ color: '#33FF88', fontSize: '16px' }}
          >
            _
          </motion.span>
        </div>
      </div>
    </div>
  );
}