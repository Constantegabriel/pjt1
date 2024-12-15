import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Ícones do react-icons
import "./App.css";

export default function Page() {
  return (
    <div className="container">
      <img src="/rizon.png" alt="RizonTec Logo" className="header-logo" />
      <h1 className="title">Entre em contato</h1>
      <div className="button-group">
        <a href="https://wa.me/numero1" className="button whatsapp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" /> <span className="divider">|</span> Vendedor 1
        </a>
        <a href="https://wa.me/numero2" className="button whatsapp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" /> <span className="divider">|</span> Vendedor 2
        </a>
        <a href="https://instagram.com" className="button instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" /> <span className="divider">|</span> Siga-nos
        </a>
        <a href="https://facebook.com" className="button facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" /> <span className="divider">|</span> Siga-nos
        </a>
        <a href="https://olx.com.br" className="button olx" target="_blank" rel="noopener noreferrer">
          <img src="/olx.png" alt="Logo OLX" className="icon olx-icon" />
          <span className="divider">|</span> Conheça nossa loja
        </a>
      </div>
    </div>
  );
}
