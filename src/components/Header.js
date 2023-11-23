// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import TechImage from '../images/connect.png'; // Importando a nova imagem

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const Menu = () => (
    <ul className={isMobile ? "mobile" : "desktop"}>
      <img src={TechImage} alt="Psico App" />  

      <li><a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Inicio</a></li>
      <li><a href="/contato" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Fale Conosco</a></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );

  return (
    <header className="header">
      {isMobile ? (
        <nav>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
            <span>MENU</span>
          </button>
          {isOpen && <Menu />}
        </nav>
      ) : (
        <nav>
          <Menu />
        </nav>
      )}
    </header>
  );
};

export default Header;
