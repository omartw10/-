import { motion } from 'framer-motion';

const orgs = [
  { name: 'Apple', tier: 1 },
  { name: 'Google', tier: 1 },
  { name: 'Microsoft', tier: 1 },
  { name: 'CrowdStrike', tier: 1 },
  { name: 'JPMorgan', tier: 2 },
  { name: 'UK AISI', tier: 2 },
  { name: 'NSA', tier: 2 },
  { name: '+43 أخرى', tier: 3 },
];

const stats = [
  { number: '50+', label: 'منظمة مختارة', accent: 'var(--primary)' },
  { number: '$100M', label: 'ائتمانات استخدام', accent: '#D87858' },
  { number: '$4M', label: 'تبرعات مفتوح المصدر', accent: '#C06848' },
];

export default function S09_Glasswing({ currentStep }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(1rem, 2vw, 1.5rem)',
      direction: 'rtl', gap: 'clamp(0.6rem, 1.5vw, 1rem)',
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '10px', marginBottom: '0.4rem',
        }}>
          <div style={{ height: '2px', width: '30px', background: 'var(--primary)', opacity: 0.4 }} />
          <span style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2.2vw, 22px)',
            color: 'var(--primary)',
          }}>
            مشروع Glasswing
          </span>
          <div style={{ height: '2px', width: '30px', background: 'var(--primary)', opacity: 0.4 }} />
        </div>
        <p style={{
          fontFamily: 'var(--font-arabic)', color: 'var(--text-secondary)',
          fontSize: 'clamp(12px, 1.4vw, 16px)', lineHeight: 1.7,
        }}>
          بدلاً من نشر ميثوس للعموم — قرروا توجيهه حصرياً للمدافعين
        </p>
      </motion.div>

      {/* Org cards — two-row flowing grid */}
      {currentStep >= 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '8px', width: '100%',
          }}
        >
          {/* Row 1 — Tier 1 */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 'clamp(6px, 1vw, 10px)',
            flexWrap: 'wrap',
          }}>
            {orgs.filter(o => o.tier === 1).map((org, i) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                style={{
                  background: 'var(--bg-card)',
                  border: '2px solid var(--primary)',
                  borderRadius: '8px',
                  padding: 'clamp(8px, 1.2vw, 12px) clamp(16px, 2.2vw, 28px)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(10px, 1.3vw, 14px)',
                  color: 'var(--primary)', fontWeight: 700,
                  boxShadow: '0 3px 10px rgba(216, 120, 88, 0.12)',
                  direction: 'ltr',
                }}
              >
                {org.name}
              </motion.div>
            ))}
          </div>
          {/* Row 2 — Tier 2 + 3 */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 'clamp(6px, 1vw, 10px)',
            flexWrap: 'wrap',
          }}>
            {orgs.filter(o => o.tier >= 2).map((org, i) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
                style={{
                  background: org.tier === 3 ? 'var(--primary)' : 'var(--bg-card)',
                  border: org.tier === 3 ? 'none' : '1px solid var(--border-light)',
                  borderRadius: '8px',
                  padding: 'clamp(7px, 1vw, 10px) clamp(14px, 1.8vw, 22px)',
                  fontFamily: org.tier === 3 ? 'var(--font-arabic)' : 'var(--font-mono)',
                  fontSize: 'clamp(9px, 1.1vw, 12px)',
                  color: org.tier === 3 ? 'white' : 'var(--text-secondary)',
                  fontWeight: 600,
                  boxShadow: org.tier === 3
                    ? '0 3px 12px rgba(216, 120, 88, 0.3)'
                    : '0 2px 6px rgba(0,0,0,0.04)',
                  direction: 'ltr',
                }}
              >
                {org.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Stats row */}
      {currentStep >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex', gap: 'clamp(0.5rem, 1.2vw, 0.8rem)',
            justifyContent: 'center', width: '100%',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12, type: 'spring' }}
              style={{
                textAlign: 'center',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderBottom: `4px solid ${s.accent}`,
                padding: 'clamp(0.7rem, 1.4vw, 1.2rem) clamp(1rem, 2vw, 1.5rem)',
                borderRadius: '10px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                flex: 1, maxWidth: '200px',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-pixel)', color: s.accent,
                fontSize: 'clamp(16px, 2.8vw, 28px)', marginBottom: '6px',
              }}>{s.number}</div>
              <div style={{
                fontFamily: 'var(--font-arabic)', color: 'var(--text-secondary)',
                fontSize: 'clamp(11px, 1.3vw, 14px)',
              }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}