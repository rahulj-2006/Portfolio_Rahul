import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, FlaskConical } from 'lucide-react';

/* Animated counter hook */
const useAnimatedCounter = (end, duration = 1500, inView = false) => {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const numEnd = parseInt(end);
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numEnd));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return count;
};

const stats = [
  { label: 'Projects Built', value: '8', suffix: '+', color: '#F5C518' },
  { label: 'Technologies', value: '15', suffix: '+', color: '#F5C518' },
  { label: 'Research Paper', value: '1', suffix: '', color: '#E8A500' },
];

const StatCard = ({ stat, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const animatedValue = useAnimatedCounter(stat.value, 1200, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="glass-panel"
      style={{
        textAlign: 'center',
        padding: '1.5rem 2rem',
        minWidth: '130px',
        flex: '1 1 130px',
        maxWidth: '200px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold accent line at top */}
      <div style={{
        position: 'absolute', top: 0, left: '20%', right: '20%',
        height: '2px', borderRadius: '0 0 2px 2px',
        background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
        opacity: 0.4,
      }} />

      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '2.4rem',
        fontWeight: 900,
        color: stat.color,
        lineHeight: 1,
        marginBottom: '8px',
        textShadow: '0 0 25px rgba(245,197,24,0.3)',
      }}>
        {animatedValue}{stat.suffix}
      </div>
      <div style={{
        fontSize: '0.72rem', color: '#888', letterSpacing: '0.1em',
        textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 500,
      }}>
        {stat.label}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="section-container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="bat-stripe" style={{ marginBottom: '1rem' }} />
          <h2 className="heading-lg" style={{ marginBottom: '0.5rem' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', fontSize: '0.95rem' }}>
            I am vengeance. I am the night. I am... a developer.
          </p>
        </div>

        {/* Animated Stats row */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 0.15} />
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              borderColor: 'rgba(245,197,24,0.25)',
              boxShadow: '0 0 30px rgba(245,197,24,0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Briefcase size={20} color="#F5C518" />
              </div>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', letterSpacing: '0.08em' }}>Current Role</h3>
            </div>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Intern at <span style={{ color: '#F5C518' }}>Radtar Greens</span>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: '1.6' }}>
              Working on innovative AI and ML solutions for agricultural technology and startup ecosystems.
            </p>
          </motion.div>

          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              borderColor: 'rgba(245,197,24,0.25)',
              boxShadow: '0 0 30px rgba(245,197,24,0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <GraduationCap size={20} color="#F5C518" />
              </div>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', letterSpacing: '0.08em' }}>Education</h3>
            </div>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Jain University, Kochi
            </p>
            <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: '1.6' }}>
              Bachelor of Technology — CSE (AI & ML)
            </p>
            <span style={{
              display: 'inline-block', fontSize: '0.75rem', color: '#666', marginTop: '0.5rem',
              padding: '4px 12px', background: 'rgba(245,197,24,0.06)', borderRadius: '20px',
              border: '1px solid rgba(245,197,24,0.1)'
            }}>
              2024 — Present
            </span>
          </motion.div>

          <motion.div
            className="glass-panel"
            style={{ gridColumn: '1 / -1' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              borderColor: 'rgba(245,197,24,0.25)',
              boxShadow: '0 0 30px rgba(245,197,24,0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <FlaskConical size={20} color="#F5C518" />
              </div>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', letterSpacing: '0.08em' }}>Research</h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.7' }}>
              Submitted a research paper proposing prevention and solution-based approaches for controlling Water Hyacinth, focusing on environmental impact reduction and sustainable ecosystem management.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
