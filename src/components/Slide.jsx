import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Slide({ 
  children, 
  totalSteps = 1, 
  initialStep = 0,
  onNextSlide, 
  onPrevSlide, 
  onStepChange,
  useGlitch = false 
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const containerRef = useRef(null);
  const [cursorSide, setCursorSide] = useState('right');

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      if (onStepChange) onStepChange(next);
    } else {
      onNextSlide();
    }
  }, [currentStep, totalSteps, onNextSlide, onStepChange]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      if (onStepChange) onStepChange(prev);
    } else {
      onPrevSlide();
    }
  }, [currentStep, onPrevSlide, onStepChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        nextStep();
      } else if (e.key === 'ArrowLeft') {
        prevStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextStep, prevStep]);

  // Mouse click navigation
  const handleClick = useCallback((e) => {
    if (e.target.closest('button, a, input, select, [role="button"]')) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX > rect.width / 2) {
      nextStep();
    } else {
      prevStep();
    }
  }, [nextStep, prevStep]);

  // Track mouse position for cursor change
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    if (e.target.closest('button, a, input, select, [role="button"]')) {
      setCursorSide('interactive');
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    setCursorSide(mouseX > rect.width / 2 ? 'right' : 'left');
  }, []);

  const cursorClass = cursorSide === 'interactive' 
    ? '' 
    : cursorSide === 'right' 
      ? 'nav-zone-right' 
      : 'nav-zone-left';

  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -40, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ width: '100%', height: '100%' }}
    >
      <div
        ref={containerRef}
        className={`slide-content ${cursorClass}`}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        {typeof children === 'function' ? children(currentStep) : children}
      </div>
    </motion.div>
  );
}
