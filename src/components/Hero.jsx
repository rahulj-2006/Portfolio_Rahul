import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const useTypewriter = (text, speed = 80, delay = 0) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, speed, started]);

  return displayed;
};

const Hero = ({ theme, animate = true }) => {
  const tagline = useTypewriter(
    'Motivated Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. Building full-stack, AI & Blockchain projects with real-world impact.',
    25,
    1800
  );

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 6% 40px',
        position: 'relative',
        zIndex: 10,
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: '4rem',
      }}>
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ minWidth: 0 }}
        >
          {/* Bat Stripe */}
          <motion.div
            className="bat-stripe"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ marginBottom: '1.5rem' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              color: '#F5C518',
              marginBottom: '0.8rem',
              textTransform: 'uppercase'
            }}
          >
            B.Tech CSE (AI & ML)
          </motion.p>

          {/* Full Name with staggered letter reveal */}
          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '0.03em',
            marginBottom: '0.5rem',
          }}>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'block',
                color: '#fff',
                fontSize: 'clamp(1.8rem, 8vw, 5rem)',
                wordBreak: 'break-word',
              }}
            >
              RAHUL
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-gradient"
              style={{
                display: 'block',
                fontSize: 'clamp(1.8rem, 8vw, 5rem)',
                animation: 'electric-glow 3s ease-in-out infinite',
                wordBreak: 'break-word',
              }}
            >
              JAYAKUMAR
            </motion.span>
          </h1>

          {/* Subtitle with typing cursor */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: '#555',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            {theme === 'dark' ? '🦇 Developer • AI/ML Enthusiast • The Dark Coder' : '🃏 Developer • AI/ML Enthusiast • The Joker Coder'}
          </motion.p>

          {/* Typewriter description */}
          <div
            style={{
              maxWidth: '480px',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              color: '#888',
              fontWeight: 300,
              minHeight: '4em',
            }}
          >
            {tagline}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                background: '#F5C518',
                marginLeft: '2px',
                verticalAlign: 'text-bottom',
              }}
            />
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}
          >
            <a
              href="#projects"
              id="hero-cta-projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #F5C518, #E8A500)',
                color: '#000',
                fontSize: '0.85rem',
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 20px rgba(245, 197, 24, 0.25)',
                textDecoration: 'none',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 35px rgba(245, 197, 24, 0.4)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(245, 197, 24, 0.25)';
              }}
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              id="hero-cta-contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '8px',
                background: 'transparent',
                color: '#ccc',
                fontSize: '0.85rem',
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.12)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                textDecoration: 'none',
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = '#F5C518';
                e.currentTarget.style.color = '#F5C518';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(245, 197, 24, 0.15)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = '#ccc';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={animate ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 60, scale: 0.9 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: 'clamp(220px, 22vw, 340px)',
            height: 'clamp(280px, 28vw, 420px)',
          }}>
            {/* Gold glow ring */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '24px',
              background: 'radial-gradient(circle, rgba(245,197,24,0.1), transparent 70%)',
              filter: 'blur(30px)',
              zIndex: 0,
              animation: 'pulse-glow 4s ease-in-out infinite'
            }} />

            {/* Gold top accent */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #F5C518, #E8A500)',
              borderRadius: '20px 20px 0 0',
              zIndex: 3,
              boxShadow: '0 0 15px rgba(245,197,24,0.5)',
            }} />

            {/* Image */}
            <div style={{
              position: 'relative',
              width: '100%', height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(245,197,24,0.08)',
              zIndex: 1,
            }}>
              <img
                src={theme === 'dark' ? "/batman-hero.jpg" : "/joker-hero.jpg"}
                alt={theme === 'dark' ? "Batman" : "Joker"}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: theme === 'dark' ? 'contrast(1.1) brightness(0.85) sepia(0.15)' : 'contrast(1.1) brightness(0.9)',
                }}
              />
              {/* Dark overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(10,10,10,0.95), transparent)',
              }} />
            </div>

            {/* Bottom label */}
            <div style={{
              position: 'absolute',
              bottom: '14px', left: '14px', right: '14px',
              zIndex: 2,
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: '#666',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>Developer</span>
              <span style={{ color: 'var(--bat-gold)', fontSize: '0.7rem' }}>{theme === 'dark' ? '🦇' : '🃏'}</span>
              <span>AI/ML</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          color: '#444',
        }}
      >
        <span style={{
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          fontFamily: "'Orbitron', sans-serif",
          textTransform: 'uppercase'
        }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} color="#F5C518" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
