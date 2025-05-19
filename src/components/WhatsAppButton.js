import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/55041992287482"  // ← Substitua pelo número real (com DDI + DDD)
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src="/icons/whatsapp-icon.png"  // Coloque o ícone nessa pasta
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
