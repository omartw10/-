import { useState, useMemo, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Mascot from './Mascot';
import ProgressBar from './ProgressBar';
import BootSequence from './BootSequence';
import GlitchTransition from './GlitchTransition';
import Slide from './Slide';

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
import S12_LabSQL from '../slides/S12_LabSQL';
import S13_LabPrompt from '../slides/S13_LabPrompt';
import S14_Ending from '../slides/S14_Ending';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [bootDone, setBootDone] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  const slideConfig = useMemo(() => [
    { component: S01_Cover,      totalSteps: 1, eyeState: 'normal',  useGlitch: false, mascotPos: 'bottom-right' },
    { component: S02_WhatChanged,totalSteps: 2, eyeState: 'threat',  useGlitch: true,  mascotPos: 'bottom-left'  },
    { component: S03_AIWeapon,   totalSteps: 4, eyeState: 'threat',  useGlitch: true,  mascotPos: 'top-right'    },
    { component: S04_AIShield,   totalSteps: 4, eyeState: 'safe',    useGlitch: false, mascotPos: 'top-left'     },
    { component: S05_BigPlayers, totalSteps: 3, eyeState: 'normal',  useGlitch: false, mascotPos: 'bottom-right' },
    { component: S06_Mythos,     totalSteps: 4, eyeState: 'threat',  useGlitch: true,  mascotPos: 'bottom-left'  },
    { component: S07_Benchmarks, totalSteps: 4, eyeState: 'excited', useGlitch: false, mascotPos: 'top-right'    },
    { component: S08_Escape,     totalSteps: 4, eyeState: 'threat',  useGlitch: true,  mascotPos: 'bottom-left'  },
    { component: S09_Glasswing,  totalSteps: 3, eyeState: 'safe',    useGlitch: false, mascotPos: 'bottom-right' },
    { component: S10_Protect,    totalSteps: 4, eyeState: 'safe',    useGlitch: false, mascotPos: 'top-left'     },
    { component: S11_Economics,  totalSteps: 2, eyeState: 'threat',  useGlitch: false, mascotPos: 'top-right'    },
    { component: S12_LabSQL,     totalSteps: 1, eyeState: 'excited', useGlitch: false, mascotPos: 'bottom-left'  },
    { component: S13_LabPrompt,  totalSteps: 1, eyeState: 'excited', useGlitch: false, mascotPos: 'bottom-right' },
    { component: S14_Ending,     totalSteps: 1, eyeState: 'wink',    useGlitch: false, mascotPos: 'bottom-right' },
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

  // Go back to the LAST step of the previous slide
  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      const prevIdx = currentSlide - 1;
      const lastStep = slideConfig[prevIdx].totalSteps - 1;
      setCurrentSlide(prevIdx);
      setCurrentStep(lastStep);
    }
  }, [currentSlide, slideConfig]);

  // Jump to any slide via the nav bar
  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides && index !== currentSlide) {
      setCurrentSlide(index);
      setCurrentStep(0);
    }
  }, [totalSlides, currentSlide]);

  if (!bootDone) {
    return <BootSequence onComplete={() => setBootDone(true)} />;
  }

  const SlideComponent = activeConfig.component;

  return (
    <div className="frame-wrapper">
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
            {(step) => <SlideComponent currentStep={step} />}
          </Slide>
        </AnimatePresence>

        <Mascot 
          eyeState={activeConfig.eyeState} 
          position={activeConfig.mascotPos}
          size={70} 
        />
        
        <ProgressBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          currentStep={currentStep}
          totalSteps={activeConfig.totalSteps}
          onGoToSlide={goToSlide}
        />

        <GlitchTransition active={glitchActive} />
      </div>
    </div>
  );
}
