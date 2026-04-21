import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import SlideSticker from './SlideSticker';
import ProgressBar from './ProgressBar';
import BootSequence from './BootSequence';
import GlitchTransition from './GlitchTransition';
import Slide from './Slide';
import LabSQLContent from '../lab-pages/LabSQL';
import LabPromptContent from '../lab-pages/LabPrompt';

// Slide Imports
import S01_Cover from '../slides/S01_Cover';
import S02_WhatChanged from '../slides/S02_WhatChanged';
import S03_AIWeapon from '../slides/S03_AIWeapon';
import S04_AIShield from '../slides/S04_AIShield';
import S05_BigPlayers from '../slides/S05_BigPlayers';
import S06_Mythos from '../slides/S06_Mythos';
import S07_Benchmarks from '../slides/S07_Benchmarks';
import S08_Escape from '../slides/S08_Escape';
import S09_Glasswing from '../slides/S09_Glasswing';
import S10_Protect from '../slides/S10_Protect';
import S11_Economics from '../slides/S11_Economics';
import S12_VercelCase from '../slides/S12_VercelCase';
import S12_LabSQL from '../slides/S12_LabSQL';
import S13_LabPrompt from '../slides/S13_LabPrompt';
import S14_Ending from '../slides/S14_Ending';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [bootDone, setBootDone] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeLab, setActiveLab] = useState(null); // null | 'sql' | 'prompt'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const frameWrapperRef = useRef(null);

  useEffect(() => {
    const FRAME_W = 1100;
    const FRAME_H = 618.75;
    let rafId;
    const update = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const isFS = !!document.fullscreenElement;
        const padding = isFS ? 0 : 32; // 0 padding in fullscreen, 32px otherwise
        const scale = Math.min(
          (window.innerWidth - padding) / FRAME_W,
          (window.innerHeight - padding) / FRAME_H
        );
        document.documentElement.style.setProperty('--slide-scale', scale);
      });
    };
    update();
    window.addEventListener('resize', update);
    document.addEventListener('fullscreenchange', update);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', update);
      document.removeEventListener('fullscreenchange', update);
    };
  }, []);

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const slideConfig = useMemo(() => [
    { component: S01_Cover,      totalSteps: 1, useGlitch: false },
    { component: S02_WhatChanged,totalSteps: 2, useGlitch: true  },
    { component: S03_AIWeapon,   totalSteps: 4, useGlitch: true  },
    { component: S04_AIShield,   totalSteps: 4, useGlitch: false },
    { component: S05_BigPlayers, totalSteps: 3, useGlitch: false },
    { component: S06_Mythos,     totalSteps: 4, useGlitch: true  },
    { component: S07_Benchmarks, totalSteps: 4, useGlitch: false },
    { component: S08_Escape,     totalSteps: 4, useGlitch: true  },
    { component: S09_Glasswing,  totalSteps: 3, useGlitch: false },
    { component: S10_Protect,    totalSteps: 4, useGlitch: false },
    { component: S11_Economics,  totalSteps: 2, useGlitch: false },
    { component: S12_VercelCase, totalSteps: 5, useGlitch: true  },
    { component: S12_LabSQL,     totalSteps: 1, useGlitch: false },
    { component: S13_LabPrompt,  totalSteps: 1, useGlitch: false },
    { component: S14_Ending,     totalSteps: 1, useGlitch: false },
  ], []);

  const totalSlides = slideConfig.length;
  const activeConfig = slideConfig[currentSlide];

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      if (slideConfig[currentSlide + 1].useGlitch) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 250);
      }
      setCurrentSlide(s => s + 1);
      setCurrentStep(0);
    }
  }, [currentSlide, totalSlides, slideConfig]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      const prevIdx = currentSlide - 1;
      const lastStep = slideConfig[prevIdx].totalSteps - 1;
      setCurrentSlide(prevIdx);
      setCurrentStep(lastStep);
    }
  }, [currentSlide, slideConfig]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides && index !== currentSlide) {
      setCurrentSlide(index);
      setCurrentStep(0);
    }
  }, [totalSlides, currentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      const el = frameWrapperRef.current;
      if (el && el.requestFullscreen) {
        el.requestFullscreen().catch(err => {
          console.error(`Error: ${err.message}`);
        });
      }
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  if (!bootDone) {
    return <BootSequence onComplete={() => setBootDone(true)} />;
  }

  const SlideComponent = activeConfig.component;

  return (
    <div className="frame-wrapper" ref={frameWrapperRef}>
      <button 
        className="fullscreen-toggle" 
        onClick={toggleFullscreen}
        title={isFullscreen ? "تصغير الشاشة" : "عرض كامل الشاشة (F11)"}
        aria-label="Toggle Fullscreen"
      >
        {isFullscreen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        )}
      </button>

      <div className="slide-frame">
        <div className="scanlines" />

        <AnimatePresence mode="wait">
          <Slide
            key={currentSlide}
            initialStep={currentStep}
            totalSteps={activeConfig.totalSteps}
            onNextSlide={handleNext}
            onPrevSlide={handlePrev}
            onStepChange={setCurrentStep}
            useGlitch={activeConfig.useGlitch}
          >
            {(step) => <SlideComponent currentStep={step} onOpenLab={setActiveLab} />}
          </Slide>
        </AnimatePresence>

        <SlideSticker slideNumber={currentSlide + 1} currentStep={currentStep} />

        <ProgressBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          currentStep={currentStep}
          totalSteps={activeConfig.totalSteps}
          onGoToSlide={goToSlide}
        />

        <GlitchTransition active={glitchActive} />

        {/* Lab overlay — renders on top of the current slide, within the frame */}
        {activeLab && (
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 150,
            background: 'rgba(241, 230, 208, 0.97)',
            backdropFilter: 'blur(2px)',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}>
            {activeLab === 'sql'
              ? <LabSQLContent onClose={() => setActiveLab(null)} />
              : <LabPromptContent onClose={() => setActiveLab(null)} />
            }
          </div>
        )}
      </div>
    </div>
  );
}
