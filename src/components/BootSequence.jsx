import { useState, useEffect } from 'react';

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  
  const lines = [
    '> Booting CyberSec OS v2.0...',
    '> Loading threat modules......  [OK]',
    '> Initializing AI core.........  [OK]',
    '> All systems operational.'
  ];

  useEffect(() => {
    let timers = [];
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setVisibleLines(prev => [...prev, lines[i]]);
      }, i * 400));
    });

    const finalTimer = setTimeout(onComplete, 3500);

    const handleInput = () => {
      onComplete();
    };

    window.addEventListener('keydown', handleInput);
    window.addEventListener('click', handleInput);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finalTimer);
      window.removeEventListener('keydown', handleInput);
      window.removeEventListener('click', handleInput);
    };
  }, [onComplete]);

  return (
    <div className="frame-wrapper">
      <div className="slide-frame" style={{
        background: '#1A1A1E',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px',
      }}>
        <div style={{
          direction: 'ltr',
          fontFamily: 'var(--font-mono)',
          color: '#33FF88',
        }}>
          <div className="scanlines" style={{ opacity: 0.1 }} />
          {visibleLines.map((line, i) => (
            <p key={i} style={{ 
              fontSize: 'clamp(11px, 1.5vw, 15px)',
              lineHeight: '2.2',
              margin: 0,
              fontWeight: 600,
            }}>
              {line}
            </p>
          ))}
          <span style={{ 
            display: 'inline-block',
            width: '10px',
            height: '2px',
            background: '#33FF88',
            animation: 'blink 1s infinite',
            marginTop: '10px'
          }} />
        </div>
      </div>
    </div>
  );
}
