import React, { useEffect, useState } from 'react';
import FadeInSection from './FadeInSection';
import profileImage from './profile.jpg';

const Home = () => {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        const scrollY = window.scrollY;
        setParallax(scrollY * 0.12);
      } else {
        setParallax(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section hero-landing" id="home">
      <div className="hero-bg-accent"></div>
      <div className="container hero-content">
        <FadeInSection>
          <div
            className="hero-image-wrapper"
            style={{ transform: `translateY(${parallax}px)` }}
          >
            <div className="hero-image-spotlight"></div>
            <div className="hero-image-accent"></div>
            <img src={profileImage} alt="Sai Nath Myana" className="hero-image" />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="hero-text">
            <h1 className="visible">Hi <span role="img" aria-label="wave">👋</span>, I'm Sai Nath Myana</h1>
            <h2>
              Software Engineer @ <span style={{ color: '#0071e3' }}>Walmart Global Tech</span>
            </h2>
            <p>
              I build scalable backend systems and cloud-native solutions.<br/>
              Passionate about solving real-world problems with clean architecture and system design.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a
                href="Sai Nath Myana Resume.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/sai-myana" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/></svg>
              </a>
              <a href="https://github.com/Myana03" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Home; 