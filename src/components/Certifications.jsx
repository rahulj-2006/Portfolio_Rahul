import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Cisco Certified Network Associate (CCNA) v1.1 (200-301) Cert Prep',
    provider: 'LinkedIn Learning',
    category: 'networking',
    highlight: true,
    skills: ['Cisco Routers', 'Network Security', 'Cisco IOS'],
    date: 'Apr 2026',
    hours: '18 hours',
  },
  {
    title: 'Machine Learning with Python',
    provider: 'IBM — Coursera',
    category: 'ai',
  },
  {
    title: 'Machine Learning Basics',
    provider: 'Sungkyunkwan University — Coursera',
    category: 'ai',
  },
  {
    title: 'Python Data Structures',
    provider: 'University of Michigan — Coursera',
    category: 'programming',
  },
  {
    title: 'Developing AI Applications with Python and Flask',
    provider: 'IBM',
    category: 'ai',
  },
  {
    title: 'Data Warehousing and Data Mining',
    provider: 'Jain Group of Institutes',
    category: 'data',
  },
  {
    title: 'Fundamentals of Java Programming',
    provider: 'Board Infinity / Coursera',
    category: 'programming',
  },
  {
    title: 'Career Essentials in Generative AI',
    provider: 'Microsoft & LinkedIn Learning',
    category: 'ai',
    highlight: true,
  },
  {
    title: 'Ethics in the Age of Generative AI',
    provider: 'LinkedIn Learning',
    category: 'ai',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    provider: 'LinkedIn Learning',
    category: 'ai',
  },
];

const categoryColors = {
  ai: '#F5C518',
  programming: '#E8A500',
  networking: '#F5C518',
  data: '#E8A500',
};

const categoryLabels = {
  ai: 'AI / ML',
  programming: 'Programming',
  networking: 'Networking',
  data: 'Data Science',
};

const Certifications = () => {
  return (
    <section className="section-container" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="bat-stripe" style={{ marginBottom: '1rem' }} />
          <h2 className="heading-lg" style={{ marginBottom: '0.5rem' }}>
            Training <span className="text-gradient">Grounds</span>
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', fontSize: '0.95rem' }}>
            Even the Dark Knight never stops training.
          </p>
        </div>

        {/* Featured certification — CCNA */}
        {certifications.filter(c => c.highlight && c.skills).map((cert, index) => (
          <motion.div
            key={`featured-${index}`}
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              marginBottom: '2rem',
              borderColor: 'rgba(245,197,24,0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Featured glow */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #F5C518, transparent)',
            }} />

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '12px',
                background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Award size={24} color="#F5C518" />
              </div>

              <div style={{ flex: 1, minWidth: '280px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}>
                  <h3 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    color: '#F5C518',
                  }}>
                    {cert.title}
                  </h3>
                  <span style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '0.6rem',
                    color: '#F5C518',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(245,197,24,0.25)',
                    background: 'rgba(245,197,24,0.06)',
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                  }}>
                    ★ FEATURED
                  </span>
                </div>

                <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  {cert.provider}
                </p>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  fontSize: '0.75rem', 
                  color: '#666',
                  marginBottom: '0.8rem',
                }}>
                  {cert.date && <span>{cert.date}</span>}
                  {cert.hours && <span>• {cert.hours}</span>}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cert.skills.map((skill, i) => (
                    <span key={i} style={{
                      fontSize: '0.7rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(245,197,24,0.06)',
                      border: '1px solid rgba(245,197,24,0.12)',
                      color: '#F5C518',
                      fontWeight: 500,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* All certifications grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1rem',
        }}>
          {certifications.filter(c => !(c.highlight && c.skills)).map((cert, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: categoryColors[cert.category] || '#F5C518',
                  marginTop: '6px',
                  flexShrink: 0,
                  boxShadow: `0 0 8px ${categoryColors[cert.category] || '#F5C518'}40`,
                }} />

                <div>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#eee',
                    marginBottom: '6px',
                    lineHeight: 1.4,
                  }}>
                    {cert.title}
                  </h4>
                  <p style={{
                    fontSize: '0.78rem',
                    color: '#666',
                  }}>
                    {cert.provider}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.6rem',
                    color: categoryColors[cert.category] || '#F5C518',
                    marginTop: '6px',
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    {categoryLabels[cert.category] || 'Other'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
