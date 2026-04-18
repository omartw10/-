import { motion } from 'framer-motion';

export default function S01_Cover() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--dark)',
        position: 'relative'
      }}
    >
      <motion.div variants={item} style={{ marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ height: '2px', width: '40px', background: 'var(--primary)' }} />
          <span style={{ 
            fontFamily: 'var(--font-pixel)', 
            fontSize: 'clamp(9px, 1.2vw, 11px)', 
            color: 'var(--primary)',
            letterSpacing: '2px',
          }}>
            CYBERSECURITY × AI
          </span>
          <div style={{ height: '2px', width: '40px', background: 'var(--primary)' }} />
        </div>
      </motion.div>

      <motion.h1 
        variants={item}
        style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 'clamp(22px, 3.5vw, 38px)',
          lineHeight: '2.2',
          margin: '10px 0',
          color: 'var(--dark)',
        }}
      >
        الأمن السيبراني
      </motion.h1>

      <motion.h2
        variants={item}
        style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 'clamp(14px, 2.2vw, 24px)',
          color: 'var(--primary)',
        }}
      >
        في عصر الذكاء الاصطناعي
      </motion.h2>

      <motion.div
        variants={item}
        style={{
          width: '50%',
          height: '3px',
          background: 'var(--primary)',
          margin: '30px auto'
        }}
      />

      <motion.p
        variants={item}
        style={{
          fontFamily: 'var(--font-arabic)',
          color: 'var(--text-secondary)',
          fontSize: 'clamp(13px, 1.8vw, 18px)',
          direction: 'rtl',
          fontWeight: 500,
        }}
      >
        عمر أبو الطويرات  ·  عبدالمالك السائح
      </motion.p>

      <motion.div
        variants={item}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '40px',
          color: 'var(--primary)',
          fontSize: '28px'
        }}
      >
        ↓
      </motion.div>
    </motion.div>
  );
}
