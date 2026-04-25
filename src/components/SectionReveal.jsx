import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/*
  Wraps a section with dramatic entrance animation when scrolling into view.
  animationType: 'rise' | 'slide-left' | 'slide-right' | 'zoom' | 'split'
*/
const SectionReveal = ({ children, animationType = 'rise', delay = 0, id }) => {
  const variants = {
    rise: {
      hidden: { opacity: 0, y: 80, scale: 0.97 },
      visible: { 
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }
      },
    },
    'slide-left': {
      hidden: { opacity: 0, x: -100, rotateY: 5 },
      visible: { 
        opacity: 1, x: 0, rotateY: 0,
        transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }
      },
    },
    'slide-right': {
      hidden: { opacity: 0, x: 100, rotateY: -5 },
      visible: { 
        opacity: 1, x: 0, rotateY: 0,
        transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }
      },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
      visible: { 
        opacity: 1, scale: 1, filter: 'blur(0px)',
        transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] }
      },
    },
    split: {
      hidden: { opacity: 0, y: 60, clipPath: 'inset(10% 20% 10% 20%)' },
      visible: { 
        opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)',
        transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] }
      },
    },
  };

  const v = variants[animationType] || variants.rise;

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: '-50px' }}
      variants={v}
    >
      {children}
    </motion.div>
  );
};

/*
  Animated divider between sections — a bat-themed horizontal rule with a small bat icon.
*/
export const BatDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: false, amount: 0.15, margin: '-30px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '0 6%',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Left line */}
      <div style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.15))',
      }} />

      {/* Center bat icon */}
      <motion.div
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="20" height="10" viewBox="0 0 200 80" fill="none">
          <path
            d="M100 5 C98 10,95 18,93 22 C90 15,84 8,76 5 C68 2,58 4,50 10 C40 18,28 30,15 42 C8 50,2 58,0 65 C6 62,14 58,24 60 C34 62,42 68,50 72 C58 76,68 78,76 74 C82 71,87 66,92 58 C95 65,97 72,100 78 C103 72,105 65,108 58 C113 66,118 71,124 74 C132 78,142 76,150 72 C158 68,166 62,176 60 C186 58,194 62,200 65 C198 58,192 50,185 42 C172 30,160 18,150 10 C142 4,132 2,124 5 C116 8,110 15,107 22 C105 18,102 10,100 5Z"
            fill="var(--bat-gold)"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Right line */}
      <div style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(90deg, rgba(245,197,24,0.15), transparent)',
      }} />
    </motion.div>
  );
};

/*
  Stagger children — animates each child with a delay.
*/
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: '-30px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, style }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, y: 0, scale: 1,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        },
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
