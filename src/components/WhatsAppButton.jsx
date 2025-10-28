// WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/551181150271?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
}

export default WhatsAppButton;
