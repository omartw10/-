import { motion } from 'framer-motion';

const nodes = [
  {
    date: 'قبل 2026',
    title: 'Capybara',
    titleColor: 'var(--primary)',
    text: 'بدأ سراً داخل Anthropic. الهدف: اختبار حدود\nالتفكير المنطقي في الهجوم السيبراني.',
    badge: null,
    above: true,
  },
  {
    date: 'مارس 2026',
    title: 'The Leak',
    titleColor: '#CC3333',
    text: 'خطأ بشري في حزمة npm سرّب أجزاء\nمن كوده للعالم بشكل غير مقصود.',
    badge: { text: 'npm error', bg: '#FFEAEA', color: '#CC3333' },
    above: false,
  },
  {
    date: '7 أبريل 2026',
    title: 'الإعلان الرسمي',
    titleColor: 'var(--text-main)',
    text: 'Anthropic تكشف عن Mythos Preview\nوتحوّل التسريب لحوار عالمي حول أخلاقيات AI.',
    badge: null,
    above: true,
  },
  {
    date: 'أبريل 2026',
    title: 'ASL-3',
    titleColor: '#CC3333',
    text: 'المستوى الذي يعني: خطر كارثي.\nممنوع تماماً من الجمهور.',
    badge: { text: 'CLASSIFIED', bg: '#CC3333', color: 'white' },
    smallText: 'اجتماع البيت الأبيض لمناقشة التداعيات',
    above: false,
  },
];

export default function S06_Mythos({ currentStep }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      alignItems: 'center', padding: 'clamp(0.5rem, 2vw, 1.5rem)',
      position: 'relative', direction: 'rtl',
    }}>
      {/* Slide title */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 20px)',
        color: 'var(--primary)', textAlign: 'center', marginBottom: 'clamp(0.4rem, 0.8vw, 0.6rem)',
      }}>
        قصة ميثوس — الجدول الزمني
      </div>
      <div style={{
        width: '88%', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        minHeight: '300px',
      }}>
        {/* Horizontal line */}
        <div style={{
          position: 'absolute', top: '50%', left: '3%', right: '3%',
          height: '3px', background: 'var(--primary)', opacity: 0.3,
          transform: 'translateY(-50%)',
        }} />

        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={currentStep >= i ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, delay: currentStep === i ? 0.2 : 0 }}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              position: 'relative', zIndex: 2, flex: 1,
            }}
          >
            {node.above && (
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-light)',
                padding: 'clamp(0.5rem, 1vw, 0.8rem)',
                marginBottom: '14px', width: 'clamp(130px, 18vw, 190px)',
                textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 1.8vw, 20px)',
                  color: node.titleColor, marginBottom: '6px',
                }}>{node.title}</div>
                <p style={{
                  fontFamily: 'var(--font-arabic)', fontSize: 'clamp(10px, 1.1vw, 13px)',
                  color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line',
                }}>{node.text}</p>
              </div>
            )}

            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--primary)',
              marginBottom: node.above ? '6px' : '0',
              marginTop: !node.above ? '6px' : '0',
              order: node.above ? 0 : 2, fontWeight: 600,
            }}>
              {node.date}
            </span>

            <div style={{
              width: '16px', height: '16px', background: 'var(--primary)',
              borderRadius: '50%', flexShrink: 0, order: 1,
              border: '3px solid var(--bg-page)',
              boxShadow: '0 0 0 2px var(--primary)',
            }} />

            {!node.above && (
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-light)',
                padding: 'clamp(0.5rem, 1vw, 0.8rem)',
                marginTop: '14px', width: 'clamp(130px, 18vw, 190px)',
                textAlign: 'center', order: 3, borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-pixel)', fontSize: 'clamp(8px, 1vw, 11px)',
                  color: node.titleColor, marginBottom: '6px',
                }}>{node.title}</div>
                <p style={{
                  fontFamily: 'var(--font-arabic)', fontSize: 'clamp(10px, 1.1vw, 13px)',
                  color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line',
                }}>{node.text}</p>
                {node.badge && (
                  <span style={{
                    display: 'inline-block', marginTop: '6px',
                    background: node.badge.bg, color: node.badge.color,
                    fontFamily: 'var(--font-mono)', fontSize: '8px', padding: '3px 8px',
                  }}>{node.badge.text}</span>
                )}
                {node.smallText && (
                  <p style={{
                    fontFamily: 'var(--font-arabic)', fontSize: '10px',
                    color: 'var(--text-muted)', marginTop: '4px',
                  }}>{node.smallText}</p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}