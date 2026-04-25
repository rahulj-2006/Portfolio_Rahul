import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Code, Briefcase, ArrowUpRight } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rahuljayakumar2024@gmail.com',
    href: null,
    color: '#F5C518'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 95679 16086',
    href: null,
    color: '#E8A500'
  },
  {
    icon: Code,
    label: 'GitHub',
    value: 'rahulj-2006',
    href: 'https://github.com/rahulj-2006',
    color: '#f5f5f5'
  },
  {
    icon: Briefcase,
    label: 'LinkedIn',
    value: 'Rahul Jayakumar',
    href: 'https://www.linkedin.com/in/rahul-jayakumar-492343327',
    color: '#F5C518'
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Web3Forms API
    // The user needs to replace this with their actual access key from web3forms.com
    const accessKey = "ab35ddbd-f0f3-4fdf-9e0f-e45a0f0f1b26";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="section-container" id="contact">
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
            Signal <span className="text-gradient">Me</span>
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', fontSize: '0.95rem' }}>
            Shine the bat signal. I'll be there.
          </p>
        </div>

        {/* Contact cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href || undefined}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
                onClick={item.href ? (e) => {
                  e.preventDefault();
                  window.open(item.href, '_blank', 'noopener,noreferrer');
                } : undefined}
                className="glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  textDecoration: 'none',
                  cursor: item.href ? 'pointer' : 'default',
                  display: 'block',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: 'rgba(245,197,24,0.08)',
                      border: '1px solid rgba(245,197,24,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon size={18} color={item.color} />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '0.7rem',
                        letterSpacing: '0.12em',
                        color: '#666',
                        textTransform: 'uppercase',
                        marginBottom: '3px',
                      }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: '0.9rem', color: '#ccc', fontWeight: 500, wordBreak: 'break-all' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                  {item.href && <ArrowUpRight size={16} color="#555" />}
                </div>
              </Component>
            );
          })}
        </div>

        {/* Contact Form */}
        <div style={{ marginTop: '4rem', maxWidth: '600px', margin: '4rem auto 0' }}>
          <form onSubmit={handleSubmit} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2.5rem' }}>
            <h3 style={{ color: '#fff', marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.1em' }}>
              Send a Transmission
            </h3>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  flex: '1 1 200px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(245,197,24,0.1)',
                  padding: '1rem',
                  borderRadius: '8px',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: "'Inter', sans-serif"
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  flex: '1 1 200px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(245,197,24,0.1)',
                  padding: '1rem',
                  borderRadius: '8px',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: "'Inter', sans-serif"
                }}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(245,197,24,0.1)',
                padding: '1rem',
                borderRadius: '8px',
                color: '#fff',
                outline: 'none',
                resize: 'vertical',
                fontFamily: "'Inter', sans-serif"
              }}
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: 'var(--bat-gold)',
                color: '#000',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: '900',
                cursor: 'pointer',
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                opacity: status === 'loading' ? 0.7 : 1,
                marginTop: '1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.boxShadow = '0 0 20px rgba(245,197,24,0.4)'}
              onMouseOut={(e) => e.target.style.boxShadow = 'none'}
            >
              {status === 'loading' ? 'Sending Signal...' : 'Transmit Signal'}
            </button>

            {status === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#4caf50', textAlign: 'center', marginTop: '1rem', fontWeight: 500 }}>
                Message received! The Bat-Computer is processing it.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#f44336', textAlign: 'center', marginTop: '1rem', fontWeight: 500 }}>
                Signal jammed! Make sure you added your Web3Forms Access Key in the code.
              </motion.p>
            )}
          </form>
        </div>


        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          {/* Bat stripe */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: '60px', height: '4px', borderRadius: '2px',
              background: 'linear-gradient(90deg, #F5C518, #E8A500)',
              boxShadow: '0 0 12px rgba(245,197,24,0.3)',
            }} />
          </div>

          <p style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: '#444',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            🦇 The Dark Developer
          </p>

          <p style={{
            fontSize: '0.8rem',
            color: '#333',
          }}>
            Designed & built by Rahul Jayakumar · {new Date().getFullYear()}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
