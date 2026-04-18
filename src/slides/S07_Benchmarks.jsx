import { motion } from 'framer-motion';

const benchmarks = [
  { name: 'SWE-bench Verified', mythos: 93.9, opus: 80.8 },
  { name: 'CyberGym', mythos: 83.1, opus: 66.6 },
  { name: 'Terminal-Bench 2.0', mythos: 82.0, opus: 65.4 },
  { name: 'SWE-bench Pro', mythos: 77.8, opus: 53.4 },
];

function AnimatedNumber({ value, active }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={active ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px, 1.3vw, 14px)',
        minWidth: '48px', textAlign: 'right', fontWeight: 700,
        color: 'var(--text-main)',
      }}
    >
      {active ? `${value}%` : '0%'}
    </motion.span>
  );
}

export default function S07_Benchmarks({ currentStep }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: 'clamp(1rem, 2vw, 1.5rem)',
    }}>
      <div style={{
        fontFamily: 'var(--font-pixel)', color: 'var(--primary)',
        fontSize: 'clamp(18px, 3vw, 32px)', marginBottom: 'clamp(1.2rem, 2.5vw, 2.5rem)',
        textAlign: 'center', direction: 'rtl',
      }}>
        الأداء — بالأرقام
      </div>

      <div style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 1.8vw, 1.5rem)' }}>
        {benchmarks.map((b, i) => {
          const active = currentStep >= i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: currentStep === i ? 0.1 : 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)',
                fontSize: 'clamp(10px, 1.2vw, 13px)', fontWeight: 600,
              }}>{b.name}</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--primary)',
                  minWidth: '56px', fontWeight: 700,
                }}>Mythos</span>
                <div style={{ flex: 1, height: '20px', background: 'var(--bg-card-alt)', position: 'relative', border: '1px solid var(--border-light)', borderRadius: '6px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={active ? { width: `${b.mythos}%` } : { width: '0%' }}
                    transition={{ duration: 1, delay: currentStep === i ? 0.2 : 0, ease: 'easeOut' }}
                    style={{ height: '100%', background: 'var(--primary)' }}
                  />
                </div>
                <AnimatedNumber value={b.mythos} active={active} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)',
                  minWidth: '56px',
                }}>Opus 4.6</span>
                <div style={{ flex: 1, height: '20px', background: 'var(--bg-card-alt)', position: 'relative', border: '1px solid var(--border-light)', borderRadius: '6px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={active ? { width: `${b.opus}%` } : { width: '0%' }}
                    transition={{ duration: 1, delay: currentStep === i ? 0.4 : 0, ease: 'easeOut' }}
                    style={{ height: '100%', background: '#AAA' }}
                  />
                </div>
                <AnimatedNumber value={b.opus} active={active} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}