// components/MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames="mobile-menu"
      unmountOnExit
    >
      <div className="mobile-menu">
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
          <li><Link to="/contact-us" onClick={() => setIsOpen(false)}>Fale Conosco</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>
      </div>
    </CSSTransition>
  );
};

export default MobileMenu;
