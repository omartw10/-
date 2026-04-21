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
      padding: '1.5rem 2.5rem 2.5rem 2.5rem', direction: 'rtl',
    }}>
      {/* Slide title */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 20px)',
        color: 'var(--primary)', textAlign: 'center', marginBottom: '1rem',
      }}>
        اللاعبون الكبار — سباق التسلح
      </div>

      <div style={{
        display: 'flex', gap: '2rem', flex: 1, alignItems: 'stretch',
      }}>
        {/* RIGHT COLUMN: 3 Cards */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1,
        }}>
          {players.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={currentStep >= i
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 40 }
              }
              transition={{ duration: 0.5, delay: currentStep === i ? 0.15 : 0 }}
              style={{
                flex: 1, background: 'var(--bg-card)', padding: 'clamp(0.6rem, 1vw, 1rem)',
                border: '1px solid var(--border-light)',
                borderRight: `4px solid ${p.accent}`,
                display: 'flex', flexDirection: 'column', gap: '0.4rem',
                borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 1.6vw, 16px)',
                  color: p.modelColor,
                }}>
                  {p.model}
                </span>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(9px, 1.1vw, 11px)', color: 'var(--text-muted)' }}>
                  {p.logo}
                </span>
              </div>
              <span style={{
                display: 'inline-block', width: 'fit-content',
                background: p.badgeBg, color: 'white',
                fontFamily: 'var(--font-pixel)', fontSize: '8px',
                padding: '4px 8px', borderRadius: '4px',
              }}>
                {p.badge}
              </span>
              <ul style={{
                listStyle: 'none', padding: 0, margin: 0,
                display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '0.3rem',
              }}>
                {p.stats.map((s, j) => (
                  <li key={j} style={{
                    fontFamily: 'var(--font-arabic)', color: 'var(--text-secondary)',
                    fontSize: 'clamp(11px, 1.2vw, 13px)',
                    paddingRight: '10px',
                    borderRight: `2px solid ${p.accent}`,
                    lineHeight: '1.3',
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
            flex: 1, 
            background: 'var(--bg-card)', 
            border: '1px solid var(--border-light)',
            borderRadius: '12px', 
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{
            background: 'var(--primary)', color: 'white',
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(10px, 1.2vw, 12px)',
            padding: '8px 16px', textAlign: 'center', letterSpacing: '2px',
          }}>
            AI RACE: CURRENT LEADERBOARD
          </div>
          <div style={{
            flex: 1, position: 'relative', overflow: 'hidden', padding: '12px',
            background: '#151515', display: 'flex', alignItems: 'center', justifyContent: 'center'
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