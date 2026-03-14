import React from 'react';

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-item">
        <div className="stat-num">24h</div>
        <div className="stat-label">Tiempo promedio de entrega</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">$10K</div>
        <div className="stat-label">Precio desde (CLP)</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">8+</div>
        <div className="stat-label">Tipos de servicio</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">100%</div>
        <div className="stat-label">Cotización sin costo</div>
      </div>
    </div>
  );
};

export default Stats;
