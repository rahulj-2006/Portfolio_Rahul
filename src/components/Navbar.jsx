import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certs' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">
        RJ <span className="bat-badge" style={{
            background: 'var(--bat-gold)',
            color: theme === 'dark' ? '#000' : '#fff'
        }}>{theme === 'dark' ? '🦇 DARK' : '🃏 LIGHT'}</span>
      </a>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: '1px solid var(--bat-gold)',
            color: 'var(--text-primary)',
            padding: '6px 14px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.75rem',
            marginLeft: '1rem',
            transition: 'all var(--transition-fast)'
          }}
          onMouseOver={e => e.currentTarget.style.boxShadow = '0 0 10px rgba(245, 197, 24, 0.2)'}
          onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}
        >
          {theme === 'dark' ? 'SWITCH TO JOKER' : 'SWITCH TO BATMAN'}
        </button>
      </div>

      <button 
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
};

export default Navbar;
