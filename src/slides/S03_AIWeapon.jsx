import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  'Zero-day Discovery',
  'Vulnerability Chaining',
  'AI Phishing',
  'Deepfake A/V',
];

function Card0() {
  return (
    <>
      <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)', fontSize: 'clamp(18px, 2.5vw, 26px)', marginBottom: '1rem', fontWeight: 700 }}>
        Zero-day Discovery
      </div>
      <p style={{ fontFamily: 'var(--font-arabic)', color: 'var(--text-main)', fontSize: 'clamp(13px, 1.5vw, 18px)', lineHeight: 1.9, direction: 'rtl', marginBottom: '1.2rem' }}>
        AI يفحص ملايين أسطر الكود ويكتشف ثغرات ظلت مخفية 27 سنة.
        <br />ما كان يحتاج فريقاً وأشهراً أصبح يحدث في ساعات.
      </p>
      <div style={{
        background: 'var(--bg-card-alt)', border: '2px solid var(--primary)', padding: 'clamp(0.6rem, 1.2vw, 1rem)',
        display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem',
        borderRadius: '10px',
      }}>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(24px, 3.5vw, 40px)', color: 'var(--primary)' }}>27</span>
        <div style={{ direction: 'rtl' }}>
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '11px', color: 'var(--primary)' }}>سنة</span>
          <br />
          <span style={{ fontFamily: 'var(--font-arabic)', fontSize: '12px', color: 'var(--text-secondary)' }}>متوسط عمر الثغرات التي اكتشفها ميثوس</span>
        </div>
      </div>
      <div style={{
        background: '#1A1A1E', border: '1px solid #333', padding: '0.8rem',
        fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 1.1vw, 12px)', color: '#33FF88',
        borderRadius: '8px', direction: 'ltr', textAlign: 'left',
      }}>
        {'// OpenBSD kernel — line 4821'}<br />
        <span style={{ color: '#FF5555' }}>{'[VULNERABILITY DETECTED]'}</span>{' ████████'}
      </div>
    </>
  );
}

function Card1() {
  const boxes = ['bug #1', 'bug #2', 'bug #3'];
  return (
    <>
      <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)', fontSize: 'clamp(18px, 2.5vw, 26px)', marginBottom: '1rem', fontWeight: 700 }}>
        Vulnerability Chaining
      </div>
      <p style={{ fontFamily: 'var(--font-arabic)', color: 'var(--text-main)', fontSize: 'clamp(13px, 1.5vw, 18px)', lineHeight: 1.9, direction: 'rtl', marginBottom: '1.5rem' }}>
        لا يكتفي بثغرة واحدة — يربط عشر ثغرات صغيرة
        <br />معاً ليصنع هجوماً مدمراً ومتكاملاً.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {boxes.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              background: 'var(--bg-card-alt)', border: '1px solid var(--border-light)', padding: '8px 14px',
              fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)',
              borderRadius: '6px',
            }}>{b}</div>
            <span style={{ color: 'var(--primary)', fontSize: '18px', fontWeight: 'bold' }}>→</span>
          </div>
        ))}
        <div style={{
          background: '#FFEAEA', border: '2px solid #CC3333', padding: '10px 16px',
          fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#CC3333', fontWeight: 'bold',
          borderRadius: '6px',
        }}>ROOT</div>
      </div>
    </>
  );
}

function Card2() {
  return (
    <>
      <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)', fontSize: 'clamp(18px, 2.5vw, 26px)', marginBottom: '1rem', fontWeight: 700 }}>
        AI Phishing
      </div>
      <p style={{ fontFamily: 'var(--font-arabic)', color: 'var(--text-main)', fontSize: 'clamp(13px, 1.5vw, 18px)', lineHeight: 1.9, direction: 'rtl', marginBottom: '1.2rem' }}>
        رسائل مقنعة تعرف اسمك وأسلوبك ومديرك.
        <br />لا يمكن للبشر تمييزها عن الرسائل الحقيقية.
      </p>
      <div style={{
        background: '#FAFAFA', border: '1px solid var(--border-light)', padding: '1rem',
        fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px, 1.1vw, 13px)',
        borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        <div style={{ color: 'var(--text-muted)', marginBottom: '6px' }}>From: <span style={{ color: 'var(--text-main)' }}>ahmed.manager@company.com</span></div>
        <div style={{ color: 'var(--text-main)', fontFamily: 'var(--font-arabic)', fontSize: '14px', direction: 'rtl', margin: '10px 0' }}>
          عمر، أحتاج منك تحويل الملف بشكل عاجل...
        </div>
        <div style={{
          display: 'inline-block', background: '#FFEAEA', border: '1px solid #CC3333',
          color: '#CC3333', fontFamily: 'var(--font-pixel)', fontSize: '8px',
          padding: '4px 10px',
        }}>
          AI Generated
        </div>
      </div>
    </>
  );
}

function Card3() {
  return (
    <>
      <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)', fontSize: 'clamp(18px, 2.5vw, 26px)', marginBottom: '1rem', fontWeight: 700 }}>
        Deepfake Audio/Video
      </div>
      <p style={{ fontFamily: 'var(--font-arabic)', color: 'var(--text-main)', fontSize: 'clamp(13px, 1.5vw, 18px)', lineHeight: 1.9, direction: 'rtl', marginBottom: '1.2rem' }}>
        صوت مديرك يطلب تحويل أموال.
        <br />وجه زميلك في مكالمة فيديو. كلاهما مزيف 100%.
      </p>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{
          background: 'var(--bg-card)', border: '2px solid var(--primary)', color: 'var(--primary)',
          fontFamily: 'var(--font-mono)', fontSize: '11px', padding: '8px 14px', fontWeight: 600,
          borderRadius: '6px',
        }}>Voice Clone</span>
        <span style={{
          background: 'var(--bg-card)', border: '2px solid var(--primary)', color: 'var(--primary)',
          fontFamily: 'var(--font-mono)', fontSize: '11px', padding: '8px 14px', fontWeight: 600,
          borderRadius: '6px',
        }}>Video Fake</span>
      </div>
      <p style={{
        fontFamily: 'var(--font-arabic)', color: '#CC3333',
        fontSize: 'clamp(12px, 1.4vw, 16px)', direction: 'rtl', fontWeight: 600,
      }}>
        تقنية متاحة الآن لأي شخص
      </p>
    </>
  );
}

const cards = [Card0, Card1, Card2, Card3];

export default function S03_AIWeapon({ currentStep }) {
  const ActiveCard = cards[currentStep] || cards[0];

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', direction: 'rtl',
    }}>
      {/* LEFT — Menu */}
      <div style={{
        width: '30%', height: '100%', background: 'var(--bg-card-alt)',
        padding: 'clamp(1rem, 2vw, 1.5rem)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        gap: '4px', borderLeft: '2px solid var(--border-light)',
      }}>
        {menuItems.map((label, i) => (
          <div
            key={i}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 1.2vw, 12px)',
              color: i === currentStep ? 'var(--primary)' : 'var(--text-muted)',
              padding: '10px 12px',
              borderRight: i === currentStep ? '4px solid var(--primary)' : '4px solid transparent',
              background: i === currentStep ? 'var(--bg-card)' : 'transparent',
              transition: 'all 0.3s ease', borderRadius: '6px',
              direction: 'ltr', fontWeight: i === currentStep ? 700 : 400,
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* RIGHT — Card */}
      <div style={{ width: '70%', height: '100%', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'var(--bg-page)',
              padding: 'clamp(1.2rem, 2.5vw, 2rem)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              overflow: 'auto',
            }}
          >
            <ActiveCard />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}