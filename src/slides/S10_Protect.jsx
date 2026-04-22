import { motion } from 'framer-motion';

const items = [
  {
    borderColor: '#CC3333',
    label: 'AI Phishing',
    bold: 'لا تثق بأي رسالة غير متوقعة',
    sub: 'حتى لو من رقم تعرفه — AI يقلّد أسلوب الكتابة بدقة مرعبة.',
  },
  {
    borderColor: '#DD8833',
    label: 'التحديث الفوري — لكن بتحقق',
    bold: 'تحقق أحياناً من مصدر التحديث قبل تثبيته',
    sub: 'تعلم من Vercel: يوم تأجيل خطر، لكن تحديث حزمة npm غير معروفة قد يكون أخطر.',
  },
  {
    borderColor: 'var(--primary)',
    label: 'Multi-Factor Authentication',
    bold: 'MFA في كل حساب بلا استثناء',
    sub: 'كلمة المرور وحدها انتهت فائدتها في مواجهة AI.',
  },
  {
    borderColor: '#228855',
    label: 'Social Engineering',
    bold: 'تعلّم كيف يتلاعب AI بثقتك',
    sub: 'أخطر من أي ثغرة تقنية — يستهدف العقل لا النظام.',
  },
];

export default function S10_Protect({ currentStep }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      padding: 'clamp(1rem, 2vw, 1.5rem)',
      direction: 'rtl', overflow: 'auto',
    }}>
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 20px)',
        color: 'var(--primary)', textAlign: 'right', marginBottom: '0.8rem',
      }}>
        دليل الحماية العملي
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1, justifyContent: 'center' }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={currentStep >= i
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: 40 }
            }
            transition={{ duration: 0.4, delay: currentStep === i ? 0.1 : 0 }}
            style={{
              background: 'var(--bg-card)',
              borderRight: `5px solid ${item.borderColor}`,
              border: '1px solid var(--border-light)',
              borderRightWidth: '5px',
              borderRightColor: item.borderColor,
              padding: 'clamp(0.7rem, 1.2vw, 1rem) clamp(1rem, 1.5vw, 1.5rem)',
              borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              display: 'flex', gap: '12px', alignItems: 'flex-start',
            }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={currentStep >= i ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: currentStep === i ? 0.3 : 0, type: 'spring' }}
              style={{ fontSize: 'clamp(16px, 2.2vw, 22px)', flexShrink: 0 }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" stroke={item.borderColor} strokeWidth="2" fill="none" />
                <path d="M7 11l3 3 5-5" stroke={item.borderColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>

            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', color: item.borderColor,
                fontSize: 'clamp(10px, 1.2vw, 13px)', marginBottom: '4px', fontWeight: 700,
              }}>{item.label}</div>
              <div style={{
                fontFamily: 'var(--font-arabic)', color: 'var(--text-main)',
                fontSize: 'clamp(13px, 1.5vw, 17px)', fontWeight: 'bold',
                marginBottom: '3px',
              }}>{item.bold}</div>
              <div style={{
                fontFamily: 'var(--font-arabic)', color: 'var(--text-secondary)',
                fontSize: 'clamp(11px, 1.3vw, 15px)', lineHeight: 1.7,
              }}>{item.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}