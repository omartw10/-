import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import guideUrl from '../../Study-guide.html?url';

function TypewriterText({ text, delay = 0, speed = 40, style }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let idx = 0;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (idx < text.length) {
          setDisplayed(text.substring(0, idx + 1));
          idx++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [text, delay, speed]);

  return <span style={style}>{displayed}</span>;
}

function DownloadButton() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    const a = document.createElement('a');
    a.href = guideUrl;
    a.download = 'Study-guide.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      style={{
        background: downloaded ? '#28C840' : 'var(--primary)',
        color: downloaded ? '#fff' : '#131315',
        border: 'none',
        fontFamily: 'var(--font-arabic)',
        fontWeight: 700,
        fontSize: 'clamp(14px, 1.5vw, 18px)',
        padding: '12px 28px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        boxShadow: downloaded ? '0 0 15px rgba(40,200,64,0.4)' : '0 4px 15px rgba(216,120,88,0.3)',
      }}
    >
      {downloaded ? (
        <>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          تم تحميل الدليل بنجاح
        </>
      ) : (
        <>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          تحميل الدليل المرجعي (HTML)
        </>
      )}
    </motion.button>
  );
}

/* ── DeepFake Video Button + Modal ── */
const DEEPFAKE_VIDEO_URL = 'https://drive.google.com/file/d/1kxvWfiMQ-bWWuEVWxS-9VEkb8rL2KBBL/preview';

const pulseKeyframes = `
@keyframes dfPulse {
  0%   { transform: scale(1);   opacity: 0.7; }
  100% { transform: scale(1.6); opacity: 0; }
}
`;

function DeepFakeButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const open = useCallback(() => setModalOpen(true), []);
  const close = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    if (modalOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, close]);

  return (
    <>
      {/* inject pulse keyframe once */}
      <style>{pulseKeyframes}</style>

      <motion.button
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={open}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '10px 22px',
          background: 'linear-gradient(135deg, #131315 0%, #1E1E22 100%)',
          color: '#fff', border: '1.5px solid var(--primary)',
          borderRadius: '8px', cursor: 'pointer',
          fontFamily: 'var(--font-arabic)', fontSize: '15px', fontWeight: 700,
          boxShadow: '0 4px 18px rgba(216,120,88,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
          transition: 'box-shadow 0.3s',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* play icon with pulse */}
        <span style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'var(--primary)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, position: 'relative',
        }}>
          {/* pulse ring */}
          <span style={{
            position: 'absolute', inset: -3, borderRadius: '50%',
            border: '2px solid var(--primary)',
            animation: 'dfPulse 2s ease-out infinite',
          }} />
          {/* triangle */}
          <span style={{
            width: 0, height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '10px solid #fff',
            marginLeft: 2,
          }} />
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', letterSpacing: 2, color: 'var(--primary)', marginBottom: 2 }}>
            LIVE DEMO
          </span>
          <span>شاهد مثال DeepFake</span>
        </span>
      </motion.button>

      {/* ── Modal ── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '88vw', maxWidth: 860,
                background: '#1a1a1a', border: '2px solid var(--primary)',
                borderRadius: '10px', overflow: 'hidden',
                boxShadow: '0 0 80px rgba(216,120,88,0.25)',
              }}
            >
              {/* header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 16px', background: '#222',
                borderBottom: '1px solid var(--primary)',
              }}>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--primary)', letterSpacing: 2 }}>
                  ▶ DEEPFAKE DEMO
                </span>
                <button
                  onClick={close}
                  style={{
                    width: 28, height: 28, background: 'none',
                    border: '1px solid rgba(216,120,88,0.4)', borderRadius: 4,
                    color: 'var(--primary)', cursor: 'pointer', fontSize: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--primary)'; }}
                >✕</button>
              </div>
              {/* video 16:9 */}
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src={DEEPFAKE_VIDEO_URL}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const summarySteps = [
  { num: '01', title: 'التحول', text: 'AI غيّر معادلة الهجوم كاملاً — من أشهر إلى ساعات.' },
  { num: '02', title: 'الأداة', text: 'نفس النموذج سلاح ودرع — الفارق من يستخدمه وكيف.' },
  { num: '03', title: 'الواقع', text: 'اختراق Vercel بدأ بقرار بشري واحد خاطئ، لا ثغرة معقدة.' },
  { num: '04', title: 'مهمتك', text: 'كمهندس برمجيات، فهم هذه الأدوات ليس اختيارياً.' },
];

export default function S14_Ending() {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'row',
      padding: 'clamp(1rem, 3vw, 2.5rem)',
      direction: 'rtl', gap: '2rem',
    }}>
      {/* RIGHT SIDE (Content) - RTL means right is first in DOM */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 1.5vw, 16px)',
            color: 'var(--primary)', letterSpacing: '3px', marginBottom: '1.5rem',
          }}>
            ملخص المحاور الأربعة
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {summarySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  background: 'var(--bg-card)', padding: '1rem',
                  borderRadius: '8px', border: '1px solid var(--border-light)',
                }}
              >
                <div style={{
                  background: 'var(--primary)', color: 'white',
                  fontFamily: 'var(--font-pixel)', fontSize: '10px',
                  minWidth: '32px', height: '32px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  marginTop: '2px',
                }}>{step.num}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '16px', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>
                    {step.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '14px', color: 'var(--text-main)', lineHeight: 1.6 }}>
                    {step.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LEFT SIDE (Quote & Actions) */}
      <div style={{ 
        flex: 1, display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        borderRight: '2px solid var(--border-light)', paddingRight: '2rem',
      }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 1.5vw, 16px)',
            color: 'var(--text-muted)', letterSpacing: '5px', marginBottom: '2rem',
          }}
        >
          CONCLUSION
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ lineHeight: 2, marginBottom: '2.5rem' }}
        >
          <div style={{
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--dark)',
            marginBottom: '0.5rem', fontWeight: 600,
          }}>
            <TypewriterText text="الصراع لم يعد بشراً ضد بشر" delay={1200} speed={40} />
          </div>
          <div style={{
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--primary)',
            fontWeight: 700,
          }}>
            <TypewriterText text="— أصبح نماذج ضد نماذج" delay={2600} speed={40} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.2 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <DownloadButton />

          <DeepFakeButton />

          <button
            onClick={() => window.location.reload()}
            style={{
              border: '2px solid var(--primary)', color: 'var(--primary)',
              background: 'transparent', fontFamily: 'var(--font-pixel)',
              fontSize: '10px', padding: '10px 20px', cursor: 'pointer',
              transition: 'all 0.2s', borderRadius: '6px',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'var(--primary)';
              e.target.style.color = 'white';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--primary)';
            }}
          >
            ↩ العودة للبداية
          </button>
        </motion.div>
      </div>
    </div>
  );
}