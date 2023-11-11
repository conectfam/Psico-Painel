import React from 'react';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import './ContactUs.css';
import contactImage from '../images/contate-nos.png';
import contactUsImage from '../images/contatos.png';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-banner-container">
        <img src={contactUsImage} alt="Contate-nos" className="contact-banner" />
      </div>

      <main className="main-content">
        <div className="contact-section">
          <div className="contact-info">
            <img src={contactImage} alt="Contate-nos" className="contact-image" />
            <h2 className="contact-title fade-in-left">Entre em contato conosco</h2>
          </div>
          <div className="whatsapp-section fade-in-right">
            <a href="https://api.whatsapp.com/send/?phone=5514997605773&text=&type=phone_number&app_absent=0" target="_blank" rel="noreferrer noopener" className="whatsapp-button">Contate-nos via WhatsApp</a>
          </div>
        </div>
      </main>

      <Contact />

    </div>
  );
}

export default ContactUs;
