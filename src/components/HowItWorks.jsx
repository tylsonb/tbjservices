import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const stepsData = [
    { num: '1', title: 'Envíame tu consulta', desc: 'Cuéntame qué equipo tienes, qué problema presenta y si enciende o no. Puedes escribirme por WhatsApp o llenar el formulario.' },
    { num: '2', title: 'Recibe tu cotización', desc: 'En menos de 2 horas te confirmo el diagnóstico inicial y el precio exacto del servicio. Sin sorpresas.' },
    { num: '3', title: 'Agendamos', desc: 'Coordinamos si será atención presencial en tu domicilio (Santiago RM) o asistencia remota en línea.' },
    { num: '4', title: 'Equipo listo', desc: 'Entregamos el equipo reparado y optimizado. La mayoría de los servicios se resuelven el mismo día.' },
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
    <section id="como-funciona" style={{ background: 'transparent', maxWidth: '100%', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
        <div className="section-label">Simple y rápido</div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-100px' }}
        >
          ¿Cómo funciona?
        </motion.h2>
        <motion.p 
          className="section-sub"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
        >
          Sin vueltas. En tres pasos tienes tu equipo en camino a la solución.
        </motion.p>
        <motion.div 
          className="steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stepsData.map((step, i) => (
            <motion.div 
              key={i} 
              className="step" 
              variants={itemVariants}
            >
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
