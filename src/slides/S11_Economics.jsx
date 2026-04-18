import { motion, AnimatePresence } from 'framer-motion';

const beforeMetrics = [
  { value: '$100,000+', label: 'تكلفة Zero-day' },
  { value: 'أشهر', label: 'وقت التنفيذ' },
  { value: 'فريق نخبة', label: 'المتطلبات' },
  { value: 'هجوم واحد', label: 'في كل مرة' },
];

const afterMetrics = [
  { value: '~$20,000', label: 'تكلفة Zero-day' },
  { value: 'ساعات', label: 'وقت التنفيذ' },
  { value: 'نموذج واحد', label: 'المتطلبات' },
  { value: 'آلاف الأنظمة', label: 'في آنٍ واحد' },
];

export default function S11_Economics({ currentStep }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      padding: 'clamp(0.8rem, 1.5vw, 1.2rem)',
      direction: 'rtl',
    }}>
      {/* Slide title */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 20px)',
        color: 'var(--primary)', textAlign: 'center', marginBottom: 'clamp(0.4rem, 0.8vw, 0.5rem)',
      }}>
        اقتصاد الهجوم — المقارنة
      </div>
      <div style={{
        flex: 1, display: 'flex', gap: 'clamp(0.6rem, 1.2vw, 1rem)',
      }}>
        {/* LEFT — Before AI */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: 1, background: 'var(--bg-card)', borderTop: '4px solid var(--text-muted)',
            border: '1px solid var(--border-light)',
            borderTopWidth: '4px', borderTopColor: 'var(--text-muted)',
            padding: 'clamp(1rem, 1.5vw, 1.5rem)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.2rem',
            borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 1.8vw, 22px)', color: 'var(--text-muted)',
            marginBottom: '0.8rem', display: 'block',
          }}>
            قبل الذكاء الاصطناعي
          </span>
          {beforeMetrics.map((m, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-pixel)', color: 'var(--text-main)',
                fontSize: 'clamp(16px, 2.2vw, 24px)',
              }}>{m.value}</div>
              <div style={{
                fontFamily: 'var(--font-arabic)', color: 'var(--text-secondary)',
                fontSize: 'clamp(11px, 1.2vw, 14px)',
              }}>{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* RIGHT — After AI */}
        <AnimatePresence>
          {currentStep >= 1 && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                flex: 1, background: '#FFF0F0', borderTop: '4px solid #CC3333',
                border: '1px solid #E0BBBB',
                borderTopWidth: '4px', borderTopColor: '#CC3333',
                padding: 'clamp(1rem, 1.5vw, 1.5rem)',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.2rem',
                borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 1.8vw, 22px)', color: '#CC3333',
                marginBottom: '0.8rem', display: 'block',
              }}>
                مع ميثوس الآن
              </span>
              {afterMetrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div style={{
                    fontFamily: 'var(--font-pixel)', color: '#CC3333',
                    fontSize: 'clamp(16px, 2.2vw, 24px)',
                  }}>{m.value}</div>
                  <div style={{
                    fontFamily: 'var(--font-arabic)', color: '#883333',
                    fontSize: 'clamp(11px, 1.2vw, 14px)',
                  }}>{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Warning box */}
      {currentStep >= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            background: '#FFF5F5', border: '2px solid #CC3333',
            padding: 'clamp(0.5rem, 1vw, 1rem)', textAlign: 'center',
            marginTop: 'clamp(0.4rem, 0.8vw, 0.6rem)',
            borderRadius: '10px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(9px, 1.3vw, 12px)',
            color: '#CC3333',
          }}>
            الخطر لم يعد حكراً على الدول الكبيرة
          </span>
        </motion.div>
      )}
    </div>
  );
}