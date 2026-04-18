import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function TypewriterText({ text, delay = 0, speed = 40, style }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let idx = 0;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (idx < text.length) {
          setDisplayed(text.substring(0, idx + 1));
          idx++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [text, delay, speed]);

  return <span style={style}>{displayed}</span>;
}

export default function S14_Ending({ currentStep }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', position: 'relative',
    }}>
      {/* CONCLUSION label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 1.8vw, 20px)',
          color: 'var(--text-muted)',
          letterSpacing: '5px', marginBottom: 'clamp(1.2rem, 2.5vw, 2.5rem)',
        }}
      >
        CONCLUSION
      </motion.span>

      {/* Main quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          maxWidth: '70%',
          direction: 'rtl',
          lineHeight: 2,
        }}
      >
        <div style={{
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          fontSize: 'clamp(18px, 3vw, 32px)', color: 'var(--dark)',
          marginBottom: '0.5rem', fontWeight: 600,
        }}>
          <TypewriterText text="الصراع لم يعد بشراً ضد بشر" delay={800} speed={50} />
        </div>
        <div style={{
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          fontSize: 'clamp(18px, 3vw, 32px)', color: 'var(--primary)',
          fontWeight: 700,
        }}>
          <TypewriterText text="— أصبح نماذج ضد نماذج" delay={2800} speed={50} />
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 4.5, duration: 0.6 }}
        style={{
          width: '40%', height: '3px', background: 'var(--primary)',
          margin: 'clamp(1.2rem, 2.5vw, 2.5rem) 0',
        }}
      />

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        style={{
          fontFamily: 'var(--font-arabic)', color: 'var(--text-secondary)',
          fontSize: 'clamp(13px, 1.8vw, 18px)', direction: 'rtl',
          fontWeight: 500,
        }}
      >
        مهمتك كمهندس برمجيات: أن تفهم العدو قبل أن يضرب
      </motion.p>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5 }}
        onClick={() => window.location.reload()}
        style={{
          position: 'absolute', bottom: 'clamp(28px, 4vw, 52px)',
          border: '2px solid var(--primary)', color: 'var(--primary)',
          background: 'transparent', fontFamily: 'var(--font-pixel)',
          fontSize: 'clamp(8px, 1.1vw, 10px)', padding: '12px 24px', cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          e.target.style.background = 'var(--primary)';
          e.target.style.color = 'white';
        }}
        onMouseLeave={e => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--primary)';
        }}
      >
        ↩ العودة للبداية
      </motion.button>
    </div>
  );
}