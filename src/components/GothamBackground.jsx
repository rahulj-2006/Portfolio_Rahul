import React, { useEffect, useRef } from 'react';

const GothamBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  // Animated canvas rain for smoother performance
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize rain drops
    for (let i = 0; i < 100; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 2 + Math.random() * 4,
        length: 8 + Math.random() * 14,
        opacity: 0.03 + Math.random() * 0.07,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drops.forEach(d => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 0.3, d.y + d.length);
        ctx.strokeStyle = `rgba(180, 200, 220, ${d.opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        d.y += d.speed;
        if (d.y > canvas.height) {
          d.y = -d.length;
          d.x = Math.random() * canvas.width;
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {/* === DARK SKY GRADIENT === */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 50% 15%, rgba(245,197,24,0.02) 0%, transparent 40%),
          radial-gradient(ellipse at 20% 80%, rgba(8,8,14,0.9) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 60%, rgba(10,10,18,0.7) 0%, transparent 50%),
          linear-gradient(180deg, #030306 0%, #060610 40%, #0a0a12 70%, #0c0c10 100%)
        `,
      }} />

      {/* === CANVAS RAIN (GPU accelerated) === */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* === BAT SIGNAL SEARCHLIGHT BEAM === */}
      <div className="bat-signal-beam" />

      {/* === SIGNAL CIRCLE in the clouds === */}
      <div className="bat-signal-circle">
        {theme === 'dark' ? (
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="rgba(245,197,24,0.03)" />
            <circle cx="50" cy="50" r="40" fill="rgba(245,197,24,0.05)" />
            <circle cx="50" cy="50" r="35" stroke="rgba(245,197,24,0.06)" strokeWidth="0.5" fill="none" />
            <path
              d="M50 28 C48 32,44 36,42 34 C38 31,32 26,25 30 C20 33,18 40,22 46 C25 50,30 52,35 51 C38 50,40 48,42 50 C44 52,46 56,50 60 C54 56,56 52,58 50 C60 48,62 50,65 51 C70 52,75 50,78 46 C82 40,80 33,75 30 C68 26,62 31,58 34 C56 36,52 32,50 28Z"
              fill="rgba(10,10,10,0.85)"
            />
          </svg>
        ) : (
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="rgba(139,0,139,0.04)" />
            <circle cx="50" cy="50" r="40" fill="rgba(76,175,80,0.06)" />
            <circle cx="50" cy="50" r="35" stroke="rgba(139,0,139,0.2)" strokeWidth="1" fill="none" />
            {/* Harley Quinn Diamond */}
            <path d="M30 50 L50 20 L70 50 L50 80 Z" fill="rgba(10,10,10,0.8)" />
            {/* Joker Smile overlaid */}
            <path d="M 25 45 Q 50 75 75 45" stroke="rgba(76,175,80,0.9)" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="35" cy="35" r="4" fill="rgba(139,0,139,0.9)" />
            <circle cx="65" cy="35" r="4" fill="rgba(139,0,139,0.9)" />
          </svg>
        )}
      </div>

      {/* === FLYING ELEMENTS (Bats or HAHA) === */}
      {Array.from({ length: window.innerWidth < 768 ? 3 : 8 }).map((_, i) => (
        <div
          key={`fly-${i}`}
          className="flying-bat"
          style={{
            top: `${5 + Math.random() * 25}%`,
            animationDelay: `${i * 2.5}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
            opacity: theme === 'dark' ? (0.03 + Math.random() * 0.04) : (0.2 + Math.random() * 0.3),
            transform: `scale(${0.3 + Math.random() * 0.5})`,
          }}
        >
          {theme === 'dark' ? (
            <svg width="30" height="16" viewBox="0 0 60 30" fill="currentColor" style={{ color: '#F5C518' }}>
              <path d="M30 5 C28 8,25 12,22 10 C18 7,12 3,5 8 C1 12,0 18,4 22 C8 25,14 24,18 22 C21 20,24 22,27 25 L30 28 L33 25 C36 22,39 20,42 22 C46 24,52 25,56 22 C60 18,59 12,55 8 C48 3,42 7,38 10 C35 12,32 8,30 5Z" />
            </svg>
          ) : (
            <span style={{ 
              color: ['#8b008b', '#4caf50', '#e53935', '#f0f0f0'][i % 4], 
              fontSize: '32px', 
              filter: 'drop-shadow(0 0 8px currentColor)'
            }}>
              {['🃏', '♦️', '♠️', '♥️', '♣️'][i % 5]}
            </span>
          )}
        </div>
      ))}

      {/* === GOTHAM SKYLINE === */}
      <div className="gotham-skyline" />

      {/* === FOG / MIST === */}
      {window.innerWidth > 768 && (
        <>
          <div className="fog-layer fog-1" />
          <div className="fog-layer fog-2" />
        </>
      )}

      {/* === FLOATING EMBERS / HAHA DUST === */}
      {Array.from({ length: window.innerWidth < 768 ? 0 : 15 }).map((_, i) => (
        <div
          key={`dust-${i}`}
          className="dust-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${30 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            ...(theme === 'light' ? {
              background: 'transparent',
              boxShadow: 'none',
              color: ['rgba(156,39,176,0.6)', 'rgba(76,175,80,0.6)', 'rgba(229,57,53,0.6)'][i % 3],
              fontSize: Math.random() > 0.5 ? '14px' : '18px',
              filter: 'drop-shadow(0 0 4px currentColor)'
            } : {})
          }}
        >
          {theme === 'light' ? ['♦️', '♥️', '♠️'][i % 3] : ''}
        </div>
      ))}

      {/* === DARK VIGNETTE OVERLAY === */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)
        `,
        zIndex: 3,
      }} />
    </div>
  );
};

export default GothamBackground;
