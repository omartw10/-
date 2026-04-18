import { motion } from 'framer-motion';

const cards = [
  {
    num: '01', title: 'Anomaly Detection',
    text: 'يراقب كل حركة في الشبكة.\nأي سلوك غير اعتيادي — ينبّه فوراً.',
    metric: '< 0.3s', metricLabel: 'وقت الكشف',
  },
  {
    num: '02', title: 'Automated Response',
    text: 'لا ينتظر الإنسان. يعزل الجهاز المصاب\nويقطع اتصاله في ميلي ثانية.',
    metric: '< 1ms', metricLabel: 'وقت العزل',
  },
  {
    num: '03', title: 'Malware Analysis',
    text: 'يفتح الملف في بيئة معزولة ويحلل\nسلوكه الكامل ويكتب تقريراً.',
    metric: '< 60s', metricLabel: 'تحليل كامل',
  },
  {
    num: '04', title: 'Penetration Simulation',
    text: 'يهاجم أنظمتك أنت قبل المهاجم.\nيجد ثغراتك أولاً.',
    metric: '24/7', metricLabel: 'بلا توقف',
  },
];

export default function S04_AIShield({ currentStep }) {
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
        AI كدرع — أدوات الدفاع
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr',
        gap: 'clamp(0.5rem, 1vw, 0.8rem)', flex: 1,
      }}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={currentStep >= i
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.95 }
            }
            transition={{ duration: 0.5, delay: currentStep === i ? 0.1 : 0 }}
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-light)',
              borderTop: '4px solid var(--primary)',
              padding: 'clamp(0.8rem, 1.5vw, 1.4rem)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
              <span style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'var(--primary)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-pixel)', fontSize: '8px', color: 'white',
                flexShrink: 0,
              }}>{card.num}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', color: 'var(--primary)',
                fontSize: 'clamp(12px, 1.5vw, 16px)', fontWeight: 700,
              }}>{card.title}</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-arabic)', color: 'var(--text-main)',
              fontSize: 'clamp(12px, 1.4vw, 16px)', lineHeight: 1.8,
              direction: 'rtl', whiteSpace: 'pre-line', marginBottom: '0.6rem',
            }}>
              {card.text}
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', direction: 'rtl' }}>
              <span style={{
                fontFamily: 'var(--font-pixel)', color: 'var(--primary)',
                fontSize: 'clamp(16px, 2.5vw, 26px)',
              }}>{card.metric}</span>
              <span style={{
                fontFamily: 'var(--font-arabic)', color: 'var(--text-muted)',
                fontSize: 'clamp(10px, 1.2vw, 14px)',
              }}>{card.metricLabel}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}