import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdApps, MdAppShortcut } from 'react-icons/md';
import { AiOutlinePartition, AiTwotoneReconciliation } from 'react-icons/ai';
import brainImage from '../images/psico-brain.png';
import './Services.css';
import ScrollTrigger from 'react-scroll-trigger';
import { useNavigate } from 'react-router-dom';
import servicesImage from '../images/Services.png';

function Services() {
  const [show, setShow] = useState(false);
  const [isVisible, setVisible] = useState(false);
  let navigate = useNavigate();

  const onEnterViewport = () => {
    setVisible(true);
  }

  const onExitViewport = () => {
    setVisible(false);
  }

  useEffect(() => {
    const checkScroll = () => {
      if (!show && window.pageYOffset > 200){
        setShow(true);
      }
    }

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    }
  }, [show]);

  if (show) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <section className={`services ${show ? 'fade-in' : ''}`}>
      
      
      <h2>Conheça nossos Serviços</h2>
      <div className="services-image-container">
        <img src={servicesImage} alt="Nossos Serviços" className="services-image" />
      </div>
      <div class="footer-bar">
        <div class="footer-text">
          <p><strong>O que você está fazendo por sua saúde mental?</strong></p>
          <p>Nós democratizamos o acesso a recursos de saúde mental por meio de tecnologia empática.</p>
        </div>
      </div>
      <div className="footer-text">
        <p>Invista em sua</p>
        <p className="bungee-font">Saúde Mental</p>
        <p>Para você ou para seu negócio</p>
      </div>
      <div className="additional-info">
        <div className="info-item">
          <h3>Produtividade</h3>
          <p>A saúde mental afeta nosso humor, comportamento e capacidade cognitiva. Por conta disso, preservar a saúde mental é muito importante para podermos alcançar todo nosso potencial. Empresas e pessoas com desempenho exponencial cuidam de sua saúde mental.</p>
        </div>
        <div className="info-item">
          <h3>Habilidades comportamentais</h3>
          <p>O novo mundo exige de nós cada vez mais habilidades comportamentais, como regulação emocional, tolerância ao estresse, eficácia social. Quanto melhor nossa saúde mental, mais hábeis nos tornamos para gerenciar os desafios do dia a dia.</p>
        </div>
        <div className="info-item">
          <h3>Saúde mente-corpo</h3>
          <p>Todos nós temos características de personalidade específicas e passamos por diferentes estados emocionais que interferem positiva ou negativamente em nossa saúde física. Analisar a relação mente e corpo é fundamental para o cuidado proativo, preditivo e preventivo de nossa saúde.</p>
        </div>
        <div className="info-item">
          <h3>Felicidade e propósito</h3>
          <p>Conhecer melhor e reavaliar periodicamente quem nós somo e como estamos, além de quais são nossos valores e motivações, nos ajuda a viver uma vida com mais contentamento e propósito. O autoconhecimento favorece melhores escolhas pessoais e profissionais.</p>
        </div>
      </div>
      <div className="call-to-action">
        <div style={{ backgroundColor: '#292A63', height: '50px' }}>
          <button 
            style={{ 
              backgroundColor: '#3E4095', 
              border: '1px solid white', 
              borderRadius: '20px', 
              padding: '10px 20px', 
              color: 'white' ,
              marginTop: '7px'
            }}
            onClick={() => navigate('/tecnologia')}
          >
            Saiba mais, Clique aqui
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;