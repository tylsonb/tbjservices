import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="logo">TBJ<span>Services</span></div>
      <div className="footer-text">© 2025 TBJServices · Santiago, Chile · Todos los derechos reservados</div>
      <div className="footer-badge">
        <span style={{ width: '7px', height: '7px', background: '#00e5a0', borderRadius: '50%', display: 'inline-block' }}></span>
        Disponible ahora
      </div>
    </footer>
  );
};

export default Footer;
