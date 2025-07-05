import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const NAV_LINKS = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ];
    const sectionIds = NAV_LINKS.map(link => link.id);
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      let current = sectionIds[0];
      let minDiff = Infinity;
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const diff = Math.abs(el.offsetTop - scrollPosition);
          if (el.offsetTop <= scrollPosition && diff < minDiff) {
            minDiff = diff;
            current = id;
          }
        }
      }
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10)) {
        current = 'contact';
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <Home />
      <hr className="section-hr" />
      <About />
      <hr className="section-hr" />
      <Experience />
      <hr className="section-hr" />
      <Projects />
      <hr className="section-hr" />
      <Contact />
    </>
  );
}

export default App;
