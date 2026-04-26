import React, { useState, useCallback, useEffect } from 'react';
import GothamBackground from './components/GothamBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import BatScroll from './components/BatarangScroll';
import SectionReveal, { BatDivider } from './components/SectionReveal';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
    // Small delay so framer-motion viewport detection initializes properly
    setTimeout(() => setContentReady(true), 100);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('joker-theme');
    } else {
      document.body.classList.remove('joker-theme');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <>
      {!loaded && <Loader onComplete={handleLoaderComplete} />}

      {loaded && (
        <>
          {/* Lightning flash overlay */}
          <div className="lightning-overlay" />

          {/* Gotham City animated background */}
          <GothamBackground theme={theme} />

          {/* Batman scroll indicator */}
          <BatScroll theme={theme} />

          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Hero — no wrapper needed, it has its own animations */}
          <Hero theme={theme} animate={contentReady} />

          <BatDivider />

          {/* About — rises from below with zoom */}
          <SectionReveal animationType="zoom">
            <About />
          </SectionReveal>

          <BatDivider />

          {/* Experience — slides in from the left */}
          <SectionReveal animationType="slide-left">
            <Experience />
          </SectionReveal>

          <BatDivider />

          {/* Projects — simple rise for better performance */}
          <SectionReveal animationType="rise">
            <Projects />
          </SectionReveal>

          <BatDivider />

          {/* Certifications — slides from right */}
          <SectionReveal animationType="slide-right">
            <Certifications />
          </SectionReveal>

          <BatDivider />

          {/* Skills — zoom reveal */}
          <SectionReveal animationType="zoom">
            <Skills />
          </SectionReveal>

          <BatDivider />

          {/* Contact — rise from below */}
          <SectionReveal animationType="rise">
            <Contact />
          </SectionReveal>
        </>
      )}
    </>
  );
}

export default App;
