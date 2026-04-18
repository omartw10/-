import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function GlitchTransition({ active }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (active) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.08 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'white',
            zIndex: 200,
            pointerEvents: 'none',
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(216, 120, 88, 0.2)',
            animation: 'glitch-anim 0.15s linear',
          }} />
          <style>{`
            @keyframes glitch-anim {
              0% { clip-path: inset(10% 0 30% 0); transform: translateX(-3px); }
              25% { clip-path: inset(40% 0 10% 0); transform: translateX(3px); }
              50% { clip-path: inset(70% 0 5% 0); transform: translateX(-2px); }
              75% { clip-path: inset(10% 0 60% 0); transform: translateX(4px); }
              100% { clip-path: inset(20% 0 40% 0); transform: translateX(0); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
