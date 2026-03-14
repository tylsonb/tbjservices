import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a 
      className="wa-float hover-glow-green" 
      href="https://wa.me/56900000000?text=Hola,%20necesito%20cotizar%20un%20servicio%20t%C3%A9cnico" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.76.72 5.43 2.09 7.78L.5 31.5l7.92-2.07A15.43 15.43 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.29a13.2 13.2 0 01-6.73-1.84l-.48-.29-4.7 1.23 1.26-4.59-.31-.5A13.27 13.27 0 1116 28.79zm7.28-9.94c-.4-.2-2.36-1.16-2.73-1.3-.37-.13-.63-.2-.9.2-.26.4-1.02 1.3-1.25 1.56-.23.27-.46.3-.86.1-2.34-1.17-3.87-2.09-5.41-4.73-.41-.7.41-.65 1.17-2.16.13-.26.07-.49-.03-.69-.1-.2-.9-2.16-1.23-2.96-.32-.78-.65-.67-.9-.68h-.76c-.27 0-.7.1-1.06.49-.37.4-1.4 1.36-1.4 3.32 0 1.96 1.43 3.85 1.63 4.12.2.26 2.8 4.28 6.79 6 .95.41 1.69.66 2.27.84.95.3 1.82.26 2.5.16.76-.11 2.36-.97 2.7-1.9.33-.93.33-1.73.23-1.9-.1-.17-.36-.27-.76-.47z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
