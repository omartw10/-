export default function ProgressBar({ currentSlide, totalSlides, currentStep, totalSteps, onGoToSlide }) {
  const stepFill = (currentStep / (totalSteps || 1)) * 100;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* ─── Slide Navigation Pills ─── */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        padding: '6px 10px',
        marginBottom: '2px',
        direction: 'ltr',
      }}>
        {Array.from({ length: totalSlides }, (_, i) => {
          const isActive = i === currentSlide;
          return (
            <button
              key={i}
              onClick={() => onGoToSlide?.(i)}
              title={`Slide ${i + 1}`}
              style={{
                width: isActive ? '24px' : '12px',
                height: '6px',
                border: 'none',
                borderRadius: '3px',
                background: isActive ? 'var(--primary)' : 'var(--border-light)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
                opacity: isActive ? 1 : 0.6,
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.target.style.background = 'var(--primary)';
                  e.target.style.opacity = '0.7';
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.target.style.background = 'var(--border-light)';
                  e.target.style.opacity = '0.6';
                }
              }}
            />
          );
        })}
      </div>

      {/* ─── Step Progress Bar ─── */}
      <div style={{
        width: '100%',
        height: '4px',
        background: 'var(--bg-card-alt)',
      }}>
        <div
          style={{
            height: '100%',
            width: `${stepFill}%`,
            background: 'var(--primary)',
            transition: 'width 0.4s ease',
          }}
        />
      </div>

    </div>
  );
}
