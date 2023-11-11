import React from 'react';
import { useHistory } from 'react-router-dom'; // Importe useHistory
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselHeader.css'; // Importe o arquivo CSS para personalizações adicionais
import logoImage from '../images/logo.png'; // Importe a imagem do logo

const CarouselHeader = () => {
  const history = useHistory(); // Crie a instância de useHistory

  // Função para lidar com o clique no botão
  const handleButtonClick = () => {
    history.push('/login'); // Redireciona para a rota /login
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <div className="carousel-container">
      <div className="carousel-text">
        <h1 className="carousel-heading">Avaliação Psicossocial ONLINE</h1>
        <img src={logoImage} alt="PSICOFAM" className="carousel-logo" />
      </div>
      <button className="contact-button" onClick={handleButtonClick}>É UM PACIENTE? ACESSE O PAINEL</button>
      <Slider {...settings}>
        {/* Exemplos de slides */}
        <div>
          <img src="https://imgur.com/c4Il9tK.png" alt="Second slide" />
        </div>
        <div>
          <img src="https://imgur.com/io1IVwJ.png" alt="Third slide" />
        </div>
        <div>
          <img src="https://imgur.com/jjObphA.png" alt="Fifth slide" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselHeader;
