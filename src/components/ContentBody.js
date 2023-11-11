import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ContentBody.css'; // Importe o arquivo CSS para estilização

const ContentBody = () => {
  const cardInfo = [
  
    {
      title: "PSICOFAM Psicossocial",
      text: "Os colaboradores realizam as avaliações na plataforma PSICOFAM criando padronização, escalabilidade e poder de predição de risco com maior acurácia.",
      img: "https://imgur.com/npAmXji.png"
    },
    {
      title: "PSICOFAM Tracking",
      text: "Monitorização de eventos e acidentes para retroalimentação da plataforma e melhoria do algoritmo de predição de risco com ferramentas de I.A.",
      img: "https://imgur.com/aCfjjn2.png"
    },
    {
      title: "Analise de resultados",
      text: "Analise de resultados, como diminuição de acidentes, sinistros, redução do FAP (FATOR ACIDENTARIO E PREVIDENCIARIO) e maior produvidade e engajamento dos profissionais.",
      img: "https://imgur.com/Ssb3ZiV.png"
    }
  ];

  return (
    <div className="content-body-container"> {/* Classe para o fundo e padding */}
      <Container fluid> {/* Container fluido para usar toda a largura da tela */}
        <Row className="justify-content-md-center">
          {cardInfo.map((card, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ContentBody;
