import { motion } from 'framer-motion';

const players = [
  {
    accent: '#D87858',
    logo: 'Anthropic',
    model: 'Claude Mythos',
    modelColor: 'var(--primary)',
    badge: 'ASL-3 — مقيّد',
    badgeBg: '#CC3333',
    stats: [
      '50+ منظمة مختارة فقط',
      'اكتشاف Zero-day مستقل',
      'ممنوع من الجمهور',
    ],
  },
  {
    accent: '#666',
    logo: 'OpenAI',
    model: 'GPT-5.4-Cyber',
    modelColor: 'var(--text-main)',
    badge: 'Trusted Access',
    badgeBg: '#666',
    stats: [
      'آلاف المدافعين الموثقين',
      'هندسة عكسية للبرمجيات',
      'أكثر انفتاحاً من ميثوس',
    ],
  },
  {
    accent: '#3A7BC8',
    logo: 'Google',
    model: 'Sec-PaLM 2',
    modelColor: '#3A7BC8',
    badge: 'Security Ops',
    badgeBg: '#2A5A8C',
    stats: [
      'تحليل التهديدات بلغة بشرية',
      'شرح سلوك الـ Malware',
      'مدمج في Google Security Ops',
    ],
  },
];

export default function S05_BigPlayers({ currentStep }) {
  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
      padding: '1rem 2rem', direction: 'rtl',
    }}>
      {/* Slide title */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 20px)',
        color: 'var(--primary)', textAlign: 'center', marginBottom: '0.5rem',
      }}>
        اللاعبون الكبار — سباق التسلح
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem',
        flex: 1, minHeight: 0,
      }}>
        {/* RIGHT COLUMN: 3 Cards */}
        <div style={{
          display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '0.6rem',
          height: '100%', minHeight: 0,
        }}>
          {players.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={currentStep >= i ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.5, delay: currentStep === i ? 0.15 : 0 }}
              style={{
                background: 'var(--bg-card)', padding: '0.8rem 1rem',
                border: '1px solid var(--border-light)',
                borderRight: `4px solid ${p.accent}`,
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                minHeight: 0, overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{
                  fontFamily: 'var(--font-pixel)', fontSize: 'clamp(11px, 1.4vw, 15px)',
                  color: p.modelColor,
                }}>
                  {p.model}
                </span>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(8px, 1vw, 10px)', color: 'var(--text-muted)' }}>
                  {p.logo}
                </span>
              </div>
              
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{
                  display: 'inline-block', background: p.badgeBg, color: 'white',
                  fontFamily: 'var(--font-pixel)', fontSize: '8px',
                  padding: '3px 6px', borderRadius: '4px',
                }}>
                  {p.badge}
                </span>
              </div>

              <ul style={{
                listStyle: 'none', padding: 0, margin: 0,
                display: 'flex', flexDirection: 'column', gap: '3px',
              }}>
                {p.stats.map((s, j) => (
                  <li key={j} style={{
                    fontFamily: 'var(--font-arabic)', color: 'var(--text-secondary)',
                    fontSize: 'clamp(11px, 1.1vw, 13px)',
                    paddingRight: '8px',
                    borderRight: `2px solid ${p.accent}`,
                    lineHeight: '1.2',
                  }}>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* LEFT COLUMN: Large Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={currentStep >= 0 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'var(--bg-card)', 
            border: '1px solid var(--border-light)',
            borderRadius: '12px', 
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column',
            height: '100%', minHeight: 0, overflow: 'hidden',
          }}
        >
          <div style={{
            background: 'var(--primary)', color: 'white',
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(10px, 1.2vw, 12px)',
            padding: '8px 16px', textAlign: 'center', letterSpacing: '2px', flexShrink: 0,
          }}>
            AI RACE: CURRENT LEADERBOARD
          </div>
          <div style={{
            flex: 1, position: 'relative', overflow: 'hidden', padding: '10px',
            background: '#151515', display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: 0,
          }}>
            <img 
              src="/slide_5.png" 
              alt="AI Arms Race" 
              style={{
                width: '100%', height: '100%', objectFit: 'contain',
                borderRadius: '8px',
              }} 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}