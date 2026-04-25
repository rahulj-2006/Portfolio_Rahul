import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const [flash, setFlash] = useState(false);

  const phases = [
    'Scanning Gotham...',
    'Activating Bat Signal...',
    'Deploying arsenal...',
    'The Dark Developer is ready.'
  ];

  useEffect(() => {
    const start = Date.now();
    const duration = 3500;
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * 100);
      setCount(current);
      setPhase(Math.min(Math.floor(progress * 4), 3));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setFlash(true);
          setTimeout(() => {
            setVisible(false);
            setTimeout(() => onComplete(), 500);
          }, 400);
        }, 300);
      }
    };
    requestAnimationFrame(animate);
  }, [onComplete]);

  // Trigger random lightning flashes
  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 150);
    }, 2500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#050508',
            overflow: 'hidden',
          }}
        >
          {/* === GOTHAM SKY — dark gradient with clouds === */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse at 50% 30%, rgba(20,18,12,0.6) 0%, transparent 60%),
              radial-gradient(ellipse at 30% 60%, rgba(10,10,15,0.8) 0%, transparent 50%),
              linear-gradient(180deg, #030306 0%, #080810 50%, #0c0c12 100%)
            `,
          }} />

          {/* === LIGHTNING FLASH === */}
          <motion.div
            animate={{ opacity: flash ? 0.25 : 0 }}
            transition={{ duration: 0.05 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 50% 20%, rgba(245,197,24,0.3), rgba(200,200,255,0.1), transparent 70%)',
              zIndex: 5,
            }}
          />

          {/* === BAT SIGNAL SEARCHLIGHT === */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '70vh',
              transformOrigin: 'bottom center',
              background: `linear-gradient(
                0deg,
                rgba(245, 197, 24, 0.08) 0%,
                rgba(245, 197, 24, 0.04) 40%,
                rgba(245, 197, 24, 0.02) 70%,
                transparent 100%
              )`,
              clipPath: 'polygon(40% 0%, 60% 0%, 90% 100%, 10% 100%)',
              zIndex: 1,
            }}
          />

          {/* === BAT SIGNAL CIRCLE + BAT SYMBOL === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: count > 20 ? [0.4, 0.8, 0.4] : 0, 
              scale: count > 20 ? 1 : 0.5,
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 1, ease: [0.16, 1, 0.3, 1] }
            }}
            style={{
              position: 'absolute',
              top: '18%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
            }}
          >
            {/* Outer glow */}
            <div style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,197,24,0.08) 0%, rgba(245,197,24,0.03) 50%, transparent 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'blur(2px)',
            }}>
              {/* Inner circle */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)',
                border: '1px solid rgba(245,197,24,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Bat Symbol */}
                <svg width="70" height="35" viewBox="0 0 200 80" fill="none">
                  <path
                    d="M100 5 C98 10,95 18,93 22 C90 15,84 8,76 5 C68 2,58 4,50 10 C40 18,28 30,15 42 C8 50,2 58,0 65 C6 62,14 58,24 60 C34 62,42 68,50 72 C58 76,68 78,76 74 C82 71,87 66,92 58 C95 65,97 72,100 78 C103 72,105 65,108 58 C113 66,118 71,124 74 C132 78,142 76,150 72 C158 68,166 62,176 60 C186 58,194 62,200 65 C198 58,192 50,185 42 C172 30,160 18,150 10 C142 4,132 2,124 5 C116 8,110 15,107 22 C105 18,102 10,100 5Z"
                    fill="#F5C518"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* === RAIN DROPS === */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`lr-${i}`}
              style={{
                position: 'absolute',
                top: '-10px',
                left: `${Math.random() * 100}%`,
                width: '1px',
                height: `${10 + Math.random() * 8}px`,
                background: 'linear-gradient(180deg, transparent, rgba(180,200,220,0.12))',
                animation: `rain-fall ${0.7 + Math.random() * 0.5}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.06 + Math.random() * 0.08,
              }}
            />
          ))}

          {/* === GOTHAM SKYLINE at bottom === */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '80px',
            zIndex: 3,
          }}>
            <svg width="100%" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none" fill="#0a0a0e">
              {/* Buildings silhouette */}
              <rect x="20" y="30" width="40" height="50" />
              <rect x="65" y="15" width="30" height="65" />
              <rect x="60" y="12" width="2" height="68" /> {/* antenna */}
              <rect x="100" y="40" width="50" height="40" />
              <rect x="160" y="20" width="35" height="60" />
              <rect x="200" y="35" width="60" height="45" />
              <rect x="280" y="10" width="25" height="70" />
              <rect x="310" y="30" width="45" height="50" />
              <rect x="370" y="45" width="55" height="35" />
              <rect x="440" y="25" width="30" height="55" />
              <rect x="480" y="15" width="40" height="65" />
              <rect x="530" y="38" width="50" height="42" />
              <rect x="600" y="8" width="20" height="72" />
              <rect x="595" y="5" width="2" height="75" /> {/* antenna */}
              <rect x="630" y="28" width="55" height="52" />
              <rect x="700" y="42" width="40" height="38" />
              <rect x="750" y="18" width="35" height="62" />
              <rect x="800" y="35" width="50" height="45" />
              <rect x="860" y="12" width="25" height="68" />
              <rect x="900" y="40" width="60" height="40" />
              <rect x="970" y="22" width="30" height="58" />
              <rect x="1010" y="38" width="45" height="42" />
              <rect x="1060" y="10" width="35" height="70" />
              <rect x="1055" y="6" width="2" height="74" /> {/* antenna */}
              <rect x="1100" y="30" width="50" height="50" />
              <rect x="1160" y="45" width="40" height="35" />
              {/* Ground */}
              <rect x="0" y="72" width="1200" height="8" />
            </svg>
            {/* Window lights */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={`w-${i}`}
                style={{
                  position: 'absolute',
                  bottom: `${15 + Math.random() * 40}px`,
                  left: `${5 + Math.random() * 90}%`,
                  width: '2px',
                  height: '2px',
                  background: `rgba(245,197,24,${0.15 + Math.random() * 0.2})`,
                  boxShadow: `0 0 3px rgba(245,197,24,${0.1 + Math.random() * 0.15})`,
                }}
              />
            ))}
          </div>

          {/* === MAIN CONTENT — Counter + Text === */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '8vh',
          }}>
            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="loader-counter"
              style={{
                textShadow: flash 
                  ? '0 0 60px rgba(245,197,24,0.6), 0 0 120px rgba(245,197,24,0.3)' 
                  : '0 0 30px rgba(245,197,24,0.2), 0 0 60px rgba(245,197,24,0.08)',
                transition: 'text-shadow 0.1s ease',
              }}
            >
              {String(count).padStart(3, '0')}
            </motion.div>

            {/* "The Dark Developer" title reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20, letterSpacing: '0.8em' }}
              animate={{ 
                opacity: count > 40 ? 1 : 0, 
                y: count > 40 ? 0 : 20,
                letterSpacing: count > 40 ? '0.35em' : '0.8em',
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 'clamp(0.6rem, 1.2vw, 0.85rem)',
                color: '#F5C518',
                textTransform: 'uppercase',
                marginTop: '1.5rem',
                textShadow: '0 0 15px rgba(245,197,24,0.3)',
              }}
            >
              The Dark Developer
            </motion.div>

            {/* Progress bar */}
            <div className="loader-bar-track" style={{ marginTop: '2rem', position: 'relative', zIndex: 10 }}>
              <div className="loader-bar-fill" style={{ width: `${count}%` }} />
            </div>

            {/* Status text */}
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="loader-text"
              style={{ marginTop: '1.5rem' }}
            >
              {phases[phase]}
            </motion.div>
          </div>

          {/* === Flying bat silhouettes during load === */}
          {count > 30 && (
            <>
              {[0, 1, 2].map(i => (
                <motion.div
                  key={`fb-${i}`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: ['-5vw', '110vw'],
                    opacity: [0, 0.08, 0.08, 0],
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5, 
                    delay: i * 0.8, 
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    top: `${20 + i * 12}%`,
                    zIndex: 4,
                  }}
                >
                  <svg width="24" height="12" viewBox="0 0 60 30" fill="#F5C518">
                    <path d="M30 5 C28 8,25 12,22 10 C18 7,12 3,5 8 C1 12,0 18,4 22 C8 25,14 24,18 22 C21 20,24 22,27 25 L30 28 L33 25 C36 22,39 20,42 22 C46 24,52 25,56 22 C60 18,59 12,55 8 C48 3,42 7,38 10 C35 12,32 8,30 5Z" />
                  </svg>
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
