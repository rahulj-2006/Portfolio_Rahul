import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'NLP', 'LangChain', 'RAG'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Solidity', 'SQL', 'Java', 'C++'],
  },
  {
    title: 'Web & Frameworks',
    skills: ['React', 'Node.js', 'Django', 'Flask', 'Next.js', 'Express'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Vercel'],
  },
  {
    title: 'Blockchain',
    skills: ['Ethereum', 'Web3.js', 'IPFS', 'Smart Contracts', 'Solidity'],
  },
];

const Skills = () => {
  return (
    <section className="section-container" id="skills">
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
            Utility <span className="text-gradient">Belt</span>
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', fontSize: '0.95rem' }}>
            Every gadget in my arsenal, ready for deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {skillCategories.map((category, cIndex) => (
            <motion.div
              key={cIndex}
              className="glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: cIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#F5C518',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                textShadow: '0 0 10px rgba(245,197,24,0.2)',
              }}>
                {category.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex}
                    whileHover={{ 
                      scale: 1.08, 
                      borderColor: 'rgba(245,197,24,0.4)',
                      boxShadow: '0 0 12px rgba(245,197,24,0.15)',
                    }}
                    style={{
                      fontSize: '0.78rem',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      background: 'rgba(245,197,24,0.04)',
                      border: '1px solid rgba(245,197,24,0.08)',
                      color: '#ccc',
                      fontWeight: 500,
                      cursor: 'default',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
