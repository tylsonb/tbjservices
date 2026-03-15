import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          Servicio técnico en Santiago RM
        </motion.div>
        
        <motion.h1 variants={itemVariants}>
          Tu computador<br/>
          <span className="accent">reparado y listo.</span>
          <span className="line2">Rápido, sin vueltas.</span>
        </motion.h1>
        
        <motion.p className="hero-sub" variants={itemVariants}>
          Diagnóstico, formateo, instalación de SSD, optimización y más.
          Atención presencial y remota en Santiago. Precios desde <strong style={{color: 'var(--text)'}}>$10.000 CLP</strong>.
        </motion.p>
        
        <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#contacto" className="btn-primary hover-glow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.1 19.36 19.36 0 0 1 1.64 3.5 2 2 0 0 1 3.62 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.94a16 16 0 0 0 6.06 6.06l1.01-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Cotizar gratis
          </a>
          <a href="#servicios" className="btn-secondary hover-glow">
            Ver servicios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
