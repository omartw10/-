import { motion, AnimatePresence } from 'framer-motion';

const beforeItems = [
  'تحتاج خبيراً متخصصاً',
  'تستغرق أسابيع أو أشهراً',
  'تكلّف مئات الآلاف',
  'محدودة بالقدرة البشرية',
];

const afterItems = [
  'أي شخص يستطيع توجيه النموذج',
  'ينفذ الهجوم في ساعات',
  'تكلفة منخفضة جداً',
  'لا حدود للسرعة أو الحجم',
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemAnim = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

function Marker({ num, active }) {
  return (
    <div style={{
      width: '30px', height: '30px', borderRadius: '50%',
      border: active ? 'none' : '2px solid var(--border-light)',
      background: active ? 'var(--primary)' : 'transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-pixel)', fontSize: '8px',
      color: active ? 'white' : 'var(--text-muted)',
      flexShrink: 0,
    }}>
      {String(num).padStart(2, '0')}
    </div>
  );
}

export default function S02_WhatChanged({ currentStep }) {
  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', direction: 'rtl',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* LEFT HALF — Before AI */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{
          width: currentStep >= 1 ? '50%' : '100%',
          height: '100%',
          background: 'var(--bg-card)',
          borderRadius: currentStep >= 1 ? '0' : '0',
          padding: 'clamp(1.2rem, 3vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 'clamp(0.8rem, 2vw, 1.5rem)',
          transition: 'width 0.6s ease',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 22px)',
          color: 'var(--text-muted)', marginBottom: '1rem',
          display: 'block',
        }}>
          قبل الذكاء الاصطناعي
        </span>
        {beforeItems.map((text, i) => (
          <motion.div
            key={i}
            variants={itemAnim}
            style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              color: 'var(--text-main)', fontFamily: 'var(--font-arabic)',
              fontSize: 'clamp(14px, 1.8vw, 20px)',
            }}
          >
            <Marker num={i + 1} active={false} />
            <span>{text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* RIGHT HALF — After AI */}
      <AnimatePresence>
        {currentStep >= 1 && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              width: '50%',
              height: '100%',
              background: '#FFF5EB',
              borderRight: '4px solid var(--primary)',
              padding: 'clamp(1.2rem, 3vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 'clamp(0.8rem, 2vw, 1.5rem)',
              position: 'relative',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2vw, 22px)',
              color: 'var(--primary)', marginBottom: '1rem',
              display: 'block',
            }}>
              بعد الذكاء الاصطناعي
            </span>
            {afterItems.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  color: 'var(--primary)', fontFamily: 'var(--font-arabic)',
                  fontSize: 'clamp(14px, 1.8vw, 20px)', fontWeight: 'bold',
                }}
              >
                <Marker num={i + 1} active={true} />
                <span>{text}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                position: 'absolute', bottom: 'clamp(14px, 2.5vw, 28px)',
                left: '50%', transform: 'translateX(-50%)',
                background: 'var(--primary)', color: 'white',
                fontFamily: 'var(--font-pixel)', fontSize: 'clamp(8px, 1vw, 10px)',
                padding: '8px 18px', whiteSpace: 'nowrap',
                borderRadius: '20px',
              }}
            >
              الفارق = الذكاء الاصطناعي
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}