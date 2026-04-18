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
      padding: 'clamp(1rem, 2vw, 1.5rem)', direction: 'rtl',
    }}>
      {/* Slide title */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 20px)',
        color: 'var(--primary)', textAlign: 'center', marginBottom: 'clamp(0.6rem, 1vw, 0.8rem)',
      }}>
        اللاعبون الكبار — سباق التسلح
      </div>

      <div style={{
        display: 'flex', gap: 'clamp(0.6rem, 1.2vw, 1rem)', flex: 1, alignItems: 'stretch',
      }}>
      {players.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={currentStep >= i
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.5, delay: currentStep === i ? 0.15 : 0 }}
          style={{
            flex: 1, background: 'var(--bg-card)', padding: 'clamp(1rem, 1.5vw, 1.5rem)',
            borderTop: `4px solid ${p.accent}`,
            border: '1px solid var(--border-light)',
            borderTopWidth: '4px',
            borderTopColor: p.accent,
            display: 'flex', flexDirection: 'column', gap: '0.7rem',
            borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(9px, 1.1vw, 11px)', color: 'var(--text-muted)' }}>
            {p.logo}
          </span>
          <span style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 1.6vw, 16px)',
            color: p.modelColor,
          }}>
            {p.model}
          </span>
          <span style={{
            display: 'inline-block', width: 'fit-content',
            background: p.badgeBg, color: 'white',
            fontFamily: 'var(--font-pixel)', fontSize: '8px',
            padding: '5px 10px',
          }}>
            {p.badge}
          </span>
          <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '0.3rem',
          }}>
            {p.stats.map((s, j) => (
              <li key={j} style={{
                fontFamily: 'var(--font-arabic)', color: 'var(--text-secondary)',
                fontSize: 'clamp(11px, 1.3vw, 15px)',
                paddingRight: '12px',
                borderRight: `3px solid ${p.accent}`,
                lineHeight: 1.6,
              }}>
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
      </div>
    </div>
  );
}