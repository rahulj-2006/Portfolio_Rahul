import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const BatScroll = ({ theme }) => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setIsVisible(v > 0.02);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const batY = useTransform(smoothProgress, [0, 1], ['2vh', '88vh']);
  const glowOpacity = useTransform(smoothProgress, [0, 0.3, 1], [0.6, 1, 1]);
  const progressHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      right: '12px',
      top: 0,
      height: '100vh',
      zIndex: 100,
      pointerEvents: 'none',
      width: '50px',
    }}>
      {/* Scroll track */}
      <div style={{
        position: 'absolute',
        top: '2vh',
        bottom: '10vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1.5px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(245,197,24,0.08) 10%, rgba(245,197,24,0.08) 90%, transparent 100%)',
      }}>
        <motion.div style={{
          width: '100%',
          borderRadius: '1px',
          background: 'linear-gradient(180deg, var(--bat-gold), var(--bat-amber))',
          boxShadow: '0 0 6px var(--bat-gold-glow)',
          height: progressHeight,
        }} />
      </div>

      {/* Batman figure */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: batY,
          x: '-50%',
          y: '-50%',
          opacity: glowOpacity,
        }}
      >
        {/* Glow aura behind Batman */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,197,24,0.2) 0%, transparent 65%)',
          filter: 'blur(8px)',
        }} />

        {/* Sparkle above */}
        <motion.div
          style={{
            position: 'absolute',
            top: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'var(--bat-gold)',
            boxShadow: '0 0 4px var(--bat-gold), 0 0 8px var(--bat-gold-glow)',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {theme === 'dark' ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            filter: window.innerWidth < 768 
              ? 'drop-shadow(0 0 4px rgba(245,197,24,0.4))' 
              : 'drop-shadow(0 0 6px rgba(245,197,24,0.6)) drop-shadow(0 0 12px rgba(245,197,24,0.3))'
          }}>
            <svg width="24" height="12" viewBox="0 0 200 80" fill="none" style={{ transform: 'scale(1.2)' }}>
              <path
                d="M100 5 C98 10,95 18,93 22 C90 15,84 8,76 5 C68 2,58 4,50 10 C40 18,28 30,15 42 C8 50,2 58,0 65 C6 62,14 58,24 60 C34 62,42 68,50 72 C58 76,68 78,76 74 C82 71,87 66,92 58 C95 65,97 72,100 78 C103 72,105 65,108 58 C113 66,118 71,124 74 C132 78,142 76,150 72 C158 68,166 62,176 60 C186 58,194 62,200 65 C198 58,192 50,185 42 C172 30,160 18,150 10 C142 4,132 2,124 5 C116 8,110 15,107 22 C105 18,102 10,100 5Z"
                fill="var(--bat-gold)"
              />
            </svg>
          </div>
        ) : (
          <div style={{
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            filter: window.innerWidth < 768 
              ? 'drop-shadow(0 0 4px var(--bat-gold))' 
              : 'drop-shadow(0 0 8px var(--bat-gold))'
          }}>
            🃏
          </div>
        )}
      </motion.div>

      {/* Endpoints */}
      <div style={{
        position: 'absolute', top: 'calc(2vh - 2px)', left: '50%',
        transform: 'translateX(-50%)', width: '4px', height: '4px',
        borderRadius: '50%', background: 'rgba(245,197,24,0.2)',
      }} />
      <div style={{
        position: 'absolute', bottom: 'calc(10vh - 2px)', left: '50%',
        transform: 'translateX(-50%)', width: '4px', height: '4px',
        borderRadius: '50%', background: 'rgba(245,197,24,0.2)',
      }} />
    </div>
  );
};

export default BatScroll;
