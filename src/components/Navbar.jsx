import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="glass-panel" style={{ background: 'rgba(10,11,14,0.6)' }}>
      <div className="logo">TBJ<span>Services</span></div>
      <div className="nav-links">
        <a 
          href="#servicios" 
          className={activeSection === 'servicios' ? 'active-link' : ''}
        >
          Servicios
        </a>
        <a 
          href="#como-funciona"
          className={activeSection === 'como-funciona' ? 'active-link' : ''}
        >
          ¿Cómo funciona?
        </a>
        <a 
          href="#contacto"
          className={activeSection === 'contacto' ? 'active-link' : ''}
        >
          Contacto
        </a>
        <a href="#contacto" className="nav-cta hover-glow">Cotizar ahora</a>
      </div>
    </nav>
  );
};

export default Navbar;
