import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ASL Sign Detection',
      description: 'Real-time American Sign Language detection system using computer vision and deep learning models to bridge communication gaps for the hearing-impaired community.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
      status: 'completed',
    },
    {
      title: 'Game Sensi',
      description: 'An interactive gaming sensitivity calculator and optimizer tool that helps gamers fine-tune their in-game settings for competitive play across multiple titles.',
      tech: ['React', 'JavaScript', 'Node.js', 'API'],
      status: 'building',
    },
    {
      title: 'AI Document Analyzer Bot',
      description: 'Intelligent RAG-powered document analysis chatbot that can ingest PDFs, extract key information, and answer questions with context-aware AI responses.',
      tech: ['Python', 'LangChain', 'Gemini AI', 'FAISS', 'React'],
      status: 'completed',
    },
    {
      title: 'Blockchain Certificate Verification',
      description: 'Decentralized certificate verification system using blockchain technology to ensure tamper-proof, transparent, and instant credential authentication.',
      tech: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'IPFS'],
      status: 'completed',
    },
    {
      title: 'Expense Tracker',
      description: 'Smart personal finance management application with data visualization, budget tracking, and AI-powered spending insights for better financial decisions.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      status: 'building',
    },
    {
      title: 'Radtar AgriBot',
      description: 'WhatsApp-integrated agricultural intelligence bot with dual-provider AI engine (Gemini + Groq), RAG-powered crop advisory, and multimodal image analysis.',
      tech: ['Python', 'Gemini AI', 'WhatsApp API', 'RAG'],
      status: 'completed',
    },
    {
      title: 'BusTrack Dashboard',
      description: 'Real-time fleet monitoring dashboard with GPS tracking, live map visualization, route analytics, and administrative controls for transportation management.',
      tech: ['Django', 'Python', 'SQLite', 'Leaflet.js'],
      status: 'completed',
    },
    {
      title: 'Text Summarizer',
      description: 'NLP-powered text summarization tool that condenses lengthy documents into concise, meaningful summaries using transformer-based language models.',
      tech: ['Python', 'NLP', 'Transformers', 'Flask'],
      status: 'completed',
    },
  ];

  return (
    <section className="section-container" id="projects">
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
            My <span className="text-gradient">Arsenal</span>
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', fontSize: '0.95rem' }}>
            Every hero needs their gadgets. Here are mine.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: false }}
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Project number + status */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1rem' 
              }}>
                <span style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  color: '#F5C518',
                  textShadow: '0 0 10px rgba(245,197,24,0.3)',
                }}>
                  [ {String(index + 1).padStart(2, '0')} ]
                </span>

                {project.status === 'building' && (
                  <span style={{
                    fontSize: '0.65rem',
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '0.1em',
                    color: '#F5C518',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(245,197,24,0.25)',
                    background: 'rgba(245,197,24,0.06)',
                    animation: 'bat-signal-pulse 2s ease-in-out infinite',
                  }}>
                    🔨 BUILDING
                  </span>
                )}

                {project.status === 'completed' && (
                  <span style={{
                    fontSize: '0.65rem',
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '0.1em',
                    color: '#4ade80',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(74,222,128,0.2)',
                    background: 'rgba(74,222,128,0.06)',
                  }}>
                    ✓ COMPLETE
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '0.8rem',
                color: '#f0f0f0',
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.88rem',
                color: '#888',
                lineHeight: '1.65',
                marginBottom: '1.2rem',
                flex: 1,
              }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.7rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(245,197,24,0.06)',
                      border: '1px solid rgba(245,197,24,0.12)',
                      color: '#F5C518',
                      fontWeight: 500,
                      letterSpacing: '0.03em',
                    }}
                  >
                    {t}
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

export default Projects;
