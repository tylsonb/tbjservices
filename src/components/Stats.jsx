import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { num: "24h", label: "Tiempo de entrega" },
  { num: "$10K", label: "Precio desde (CLP)" },
  { num: "8+", label: "Tipos de servicio" },
  { num: "100%", label: "Cotización sin costo" },
  { num: "360°", label: "Soporte integral" },
];

const Stats = () => {
  return (
    <div className="stats-container">
      <motion.div 
        className="stats-ticker"
        animate={{ x: [0, "-50%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {/* Duplicamos el array para crear un loop infinito continuo sin saltos */}
        {[...statsData, ...statsData].map((stat, i) => (
          <div key={i} className="console-stat">
            <span className="console-prompt">&gt;</span>
            <span className="console-num">[{stat.num}]</span>
            <span className="console-label">// {stat.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;
