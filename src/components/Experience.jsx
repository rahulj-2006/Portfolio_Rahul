import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'AI/ML Intern',
      company: 'Radtar Greens',
      period: 'Present',
      description: 'Developing AI-powered agricultural technology solutions including WhatsApp chatbots, crop disease detection, and RAG-based document analysis systems.',
      highlights: ['Gemini AI Integration', 'WhatsApp Bot', 'RAG Pipeline', 'Full-Stack Development']
    },
    {
      role: 'Event Head',
      company: 'College Tech Fest',
      period: '2024',
      description: 'Led and organized technical events, managed cross-functional teams, and orchestrated hackathons for 500+ participants with innovative problem-solving challenges.',
      highlights: ['Leadership', 'Event Management', 'Team Building', 'Public Speaking']
    }
  ];

  return (
    <section className="section-container" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, margin: "-100px" }}
      >
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="bat-stripe" style={{ marginBottom: '1rem' }} />
          <h2 className="heading-lg" style={{ marginBottom: '0.5rem' }}>
            Battle <span className="text-gradient">Log</span>
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', fontSize: '0.95rem' }}>
            The missions that shaped the hero.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: false }}
              style={{
                borderLeft: '3px solid',
                borderImage: 'linear-gradient(180deg, #F5C518, #E8A500) 1',
                paddingLeft: '2rem',
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '0.8rem' 
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#F5C518',
                    marginBottom: '4px',
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: '#ccc', fontSize: '0.95rem', fontWeight: 500 }}>
                    {exp.company}
                  </p>
                </div>
                <span style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '0.7rem',
                  color: '#666',
                  letterSpacing: '0.15em',
                  padding: '4px 12px',
                  border: '1px solid rgba(245,197,24,0.1)',
                  borderRadius: '20px',
                  background: 'rgba(245,197,24,0.04)',
                }}>
                  {exp.period}
                </span>
              </div>

              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.highlights.map((h, i) => (
                  <span key={i} style={{
                    fontSize: '0.7rem',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(245,197,24,0.06)',
                    border: '1px solid rgba(245,197,24,0.12)',
                    color: '#F5C518',
                    fontWeight: 500,
                  }}>
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
