import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesData = [
    { icon: '🔍', name: 'Diagnóstico y revisión', desc: 'Evaluación completa del equipo para identificar fallas de hardware o software.' },
    { icon: '💿', name: 'Formateo e instalación Windows', desc: 'Instalación limpia del sistema operativo con configuración inicial incluida.' },
    { icon: '⚡', name: 'Optimización de equipo lento', desc: 'Limpieza de software, arranque optimizado y mejoras de rendimiento.' },
    { icon: '💾', name: 'Instalación de SSD', desc: 'Reemplaza tu disco duro por un SSD y acelera tu equipo hasta 5 veces.' },
    { icon: '🧠', name: 'Ampliación de RAM', desc: 'Instalación o ampliación de memoria para mejorar el multitasking.' },
    { icon: '🗂️', name: 'Respaldo y recuperación', desc: 'Recuperación de archivos eliminados o respaldo seguro de tu información.' },
    { icon: '🧹', name: 'Limpieza interna', desc: 'Limpieza de polvo, pasta térmica y mantenimiento preventivo del equipo.' },
    { icon: '📦', name: 'Instalación de programas', desc: 'Office, antivirus, Adobe, drivers y cualquier software que necesites.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="servicios">
      <div className="section-label">Lo que resolvemos</div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: '-100px' }}
      >
        Servicios disponibles
      </motion.h2>
      <motion.p 
        className="section-sub"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
      >
        Todo lo que tu equipo puede necesitar, con atención presencial en Santiago o de forma remota.
      </motion.p>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {servicesData.map((s, i) => (
          <motion.div 
            key={i} 
            className="service-card glass-panel hover-glow" 
            variants={itemVariants}
          >
            <div className="service-icon">{s.icon}</div>
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
