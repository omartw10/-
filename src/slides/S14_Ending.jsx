import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          <DownloadButton />

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