import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const positionStyles = {
  'bottom-right': { bottom: '20px', right: '16px' },
  'bottom-left': { bottom: '20px', left: '16px' },
  'top-right': { top: '16px', right: '16px' },
  'top-left': { top: '16px', left: '16px' },
};

export default function Mascot({ eyeState = 'normal', size = 80, position = 'bottom-right' }) {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    setBounce(true);
    const timer = setTimeout(() => setBounce(false), 300);
    return () => clearTimeout(timer);
  }, [eyeState]);

  const colors = {
    body: '#D87858',
    eyeNormal: '#131315',
    eyeThreat: '#FF3333',
    eyeSafe: '#33AA66',
  };

  const renderEyes = () => {
    switch (eyeState) {
      case 'threat':
        return (
          <g className="eyes-threat" style={{ animation: 'blink 0.5s infinite' }}>
            <rect x="25" y="30" width="10" height="10" fill={colors.eyeThreat} />
            <rect x="65" y="30" width="10" height="10" fill={colors.eyeThreat} />
          </g>
        );
      case 'safe':
        return (
          <g>
            <rect x="25" y="30" width="10" height="10" fill={colors.eyeSafe} />
            <rect x="65" y="30" width="10" height="10" fill={colors.eyeSafe} />
          </g>
        );
      case 'excited':
        return (
          <g transform="translate(50, 35) scale(1.4) translate(-50, -35)">
            <rect x="25" y="30" width="10" height="10" fill={colors.eyeNormal} />
            <rect x="65" y="30" width="10" height="10" fill={colors.eyeNormal} />
          </g>
        );
      case 'wink':
        return (
          <g>
            <rect x="25" y="30" width="10" height="10" fill={colors.eyeNormal} />
            <rect x="65" y="35" width="10" height="2" fill={colors.eyeNormal} />
          </g>
        );
      default:
        return (
          <g>
            <rect x="25" y="30" width="10" height="10" fill={colors.eyeNormal} />
            <rect x="65" y="30" width="10" height="10" fill={colors.eyeNormal} />
          </g>
        );
    }
  };

  const pos = positionStyles[position] || positionStyles['bottom-right'];

  return (
    <motion.div
      style={{
        position: 'absolute',
        ...pos,
        zIndex: 50,
        width: size,
        height: size,
      }}
      animate={{
        y: [-4, 4],
        scale: bounce ? 1.15 : 1,
      }}
      transition={{
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
        scale: {
          duration: 0.3,
        },
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        {/* Legs */}
        <rect x="30" y="85" width="10" height="10" fill={colors.body} />
        <rect x="60" y="85" width="10" height="10" fill={colors.body} />
        
        {/* Arms */}
        <rect x="5" y="45" width="10" height="10" fill={colors.body} />
        <rect x="85" y="45" width="10" height="10" fill={colors.body} />
        
        {/* Body */}
        <rect x="15" y="20" width="70" height="65" fill={colors.body} />
        
        {/* Eyes Overlay */}
        {renderEyes()}
      </svg>
    </motion.div>
  );
}
