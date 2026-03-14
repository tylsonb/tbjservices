import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mockup envio: más adelante se conectará a Supabase
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      // scroll to success
      document.getElementById('form-success')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1000);
  };

  return (
    <section id="contacto">
      <div className="form-wrapper">
        <motion.div 
          className="form-info"
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Escríbenos</div>
          <h2>¿Tu equipo tiene problemas?</h2>
          <p>
            Cuéntame qué pasa y te doy una cotización rápida sin compromiso.
            Atiendo toda la Región Metropolitana de forma presencial y todo Chile de forma remota.
          </p>
          <div className="contact-ways">
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <div style={{fontWeight: 500, color: 'var(--text)', fontSize: '0.9rem'}}>WhatsApp</div>
                <div style={{fontSize: '0.85rem'}}>+56 9 XXXX XXXX</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <div style={{fontWeight: 500, color: 'var(--text)', fontSize: '0.9rem'}}>Email</div>
                <div style={{fontSize: '0.85rem'}}>contacto@tbjservices.cl</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <div style={{fontWeight: 500, color: 'var(--text)', fontSize: '0.9rem'}}>Zona de atención</div>
                <div style={{fontSize: '0.85rem'}}>Santiago RM (presencial) · Todo Chile (remoto)</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <div style={{fontWeight: 500, color: 'var(--text)', fontSize: '0.9rem'}}>Horario</div>
                <div style={{fontSize: '0.85rem'}}>Lunes a Sábado · 9:00 – 20:00</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          id="cotizacion-form" 
          onSubmit={handleSubmit}
          className="glass-panel"
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="form-row">
            <div className="field">
              <label>Nombre</label>
              <input type="text" name="nombre" placeholder="Tu nombre" required />
            </div>
            <div className="field">
              <label>Teléfono / WhatsApp</label>
              <input type="tel" name="telefono" placeholder="+56 9 XXXX XXXX" required />
            </div>
          </div>

          <div className="field">
            <label>Marca y modelo del equipo</label>
            <input type="text" name="equipo" placeholder="Ej: HP Pavilion 15, Lenovo IdeaPad 3..." required />
          </div>

          <div className="field">
            <label>Tipo de servicio</label>
            <select name="servicio" defaultValue="">
              <option value="" disabled>Selecciona un servicio...</option>
              <option>Diagnóstico y revisión</option>
              <option>Formateo e instalación Windows</option>
              <option>Optimización de equipo lento</option>
              <option>Instalación de SSD</option>
              <option>Ampliación de RAM</option>
              <option>Respaldo y recuperación de archivos</option>
              <option>Limpieza interna</option>
              <option>Instalación de programas</option>
              <option>No sé / necesito diagnóstico</option>
            </select>
          </div>

          <div className="field">
            <label>¿El equipo enciende?</label>
            <div className="radio-group">
              <div className="radio-opt">
                <input type="radio" name="enciende" id="r-si" value="Sí" defaultChecked />
                <label htmlFor="r-si">✓ Sí enciende</label>
              </div>
              <div className="radio-opt">
                <input type="radio" name="enciende" id="r-no" value="No" />
                <label htmlFor="r-no">✗ No enciende</label>
              </div>
              <div className="radio-opt">
                <input type="radio" name="enciende" id="r-av" value="A veces" />
                <label htmlFor="r-av">~ A veces</label>
              </div>
            </div>
          </div>

          <div className="field">
            <label>Describe el problema</label>
            <textarea name="problema" placeholder="Cuéntame brevemente qué está pasando con tu equipo..."></textarea>
          </div>

          {!success && (
            <button type="submit" className="btn-submit hover-glow" id="submit-btn" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar y recibir cotización →'}
            </button>
          )}

          {success && (
            <motion.div 
              id="form-success" 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ marginTop: '16px', padding: '14px', background: 'var(--green-glow)', border: '1px solid rgba(0,229,160,0.3)', borderRadius: '8px', color: 'var(--green)', fontSize: '0.9rem', textAlign: 'center' }}
            >
              ✓ ¡Mensaje enviado! Te responderemos en menos de 2 horas.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
