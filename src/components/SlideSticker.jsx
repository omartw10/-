import { motion } from 'framer-motion';

const stickerMap = {
  2: [
    { src: '/slide_1_part2.png', width: 140, bottom: '2%', right: '35%', rotate: -2 },
    { src: '/slide_1_part1.png', width: 130, bottom: '2%', left: '4%', rotate: 2, minStep: 1 },
  ],
  3: [
    { src: '/slide_3.png', width: 120, top: '4%', right: '4%', rotate: 2 },
  ],
  4: [
    { src: '/slide_4.png', width: 120, top: '4%', left: '4%', rotate: 2 },
  ],
  6: [
    { src: '/slide_6.png', width: 130, bottom: '2%', right: '2%', rotate: -2 },
  ],
  7: [
    { src: '/slide_7.png', width: 120, top: '4%', left: '4%', rotate: -2 },
  ],
  9: [
    { src: '/slide_9.png', width: 120, top: '4%', right: '4%', rotate: 2 },
  ],
  10: [
    { src: '/slide_10.png', width: 120, top: '4%', left: '4%', rotate: -2 },
  ],
  12: [
    { src: '/slide_12.png', width: 110, bottom: '2%', right: '2%', rotate: -2 },
  ],
  13: [
    { src: '/slide_13.png', width: 120, bottom: '4%', left: '4%', rotate: -2 },
  ],
  14: [
    { src: '/slide_14.png', width: 120, bottom: '4%', left: '4%', rotate: 2 },
  ],
  15: [
    { src: '/slide_15.png', width: 110, bottom: '6%', left: '6%', rotate: -2 },
  ],
};

const formatPos = (val) => typeof val === 'number' ? `${val}px` : val;

export default function SlideSticker({ slideNumber, currentStep = 0 }) {
  const stickers = stickerMap[slideNumber];

  if (!stickers?.length) {
    return null;
  }

  return stickers.map((sticker, index) => {
    if (sticker.minStep !== undefined && currentStep < sticker.minStep) return null;

    return (
      <motion.img
        key={`${slideNumber}-${sticker.src}`}
        src={sticker.src}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          zIndex: 55,
          width: `${sticker.width}px`,
          pointerEvents: 'none',
          userSelect: 'none',
          filter: 'drop-shadow(0 10px 24px rgba(19, 19, 21, 0.18))',
          ...('top' in sticker ? { top: formatPos(sticker.top) } : {}),
          ...('right' in sticker ? { right: formatPos(sticker.right) } : {}),
          ...('bottom' in sticker ? { bottom: formatPos(sticker.bottom) } : {}),
          ...('left' in sticker ? { left: formatPos(sticker.left) } : {}),
        }}
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{
          opacity: 1,
          y: [0, -5, 0],
          rotate: sticker.rotate + (index % 2 === 0 ? 1 : -1),
        }}
        transition={{
          opacity: { duration: 0.35, ease: 'easeOut' },
          y: {
            duration: 3.4 + index * 0.4,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          rotate: { duration: 0.35, ease: 'easeOut' },
        }}
      />
    );
  });
}
