import React, { useState, useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import ZohoForm from './ZohoForm';
import iconAvaliacao from '../images/iconAvaliacao.png'; 
import iconAvaliacaoRealizada from '../images/iconAvaliacaoRealizada.png';
import './PainelUsuario.css'; 

const PainelUsuario = () => {
  const [programas, setProgramas] = useState([]);
  const instituicaoNome = localStorage.getItem('instituicaoNome');
  const username = localStorage.getItem('username');
  const [avaliacaoRealizada, setAvaliacaoRealizada] = useState({});

  const formatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const atualizarAvaliacao = (cpf) => {
    setAvaliacaoRealizada({ ...avaliacaoRealizada, [cpf]: true });
  };

  useEffect(() => {
    axios.get(`https://bored-cuff-links-foal.cyclic.app/programas?instituicaoNome=${instituicaoNome}`)
      .then((response) => {
        setProgramas(response.data);
      });
  }, [instituicaoNome]);

  useEffect(() => {
    const cpf = localStorage.getItem('cpf');
    
    axios.get(`https://bored-cuff-links-foal.cyclic.app/checkAvaliacao?cpf=${cpf}&instituicaoNome=${instituicaoNome}`)
      .then(response => {
        if (response.data.avaliacaoRealizada) {
          atualizarAvaliacao(cpf);
        }
      })
      .catch(error => {
        console.error('Erro ao verificar a avaliação:', error, error.response);
      });
  }, [instituicaoNome]);

  const cpfRaw = localStorage.getItem('cpf');
  const cpfFormatted = formatCPF(cpfRaw.replace(/\D/g, ''));
  const birthDateRaw = localStorage.getItem('birthDate');
  const dateObj = new Date(birthDateRaw);
  dateObj.setUTCMinutes(dateObj.getUTCMinutes() + dateObj.getTimezoneOffset());
  const birthDate = dateObj.toLocaleDateString('pt-BR').replace(/\//g, '%2F');

  return (
    <Container>
      <Row className="text-center mb-4">
        <h1>Seja bem vindo {username}.</h1>
      </Row>
      <hr />
      <Row>
        {programas.map((programa) => (
          <Col key={programa.id} xs={12} sm={6} md={4} lg={3} className="programa-coluna mb-3">
            <div className="card-container">
              <BootstrapCard
                className={`programa-card text-center ${avaliacaoRealizada[cpfRaw] ? 'disabled' : ''}`}
              >
                <BootstrapCard.Title className="mt-2">{programa.nome_programa}</BootstrapCard.Title>
                <BootstrapCard.Body className="position-relative">
                  {avaliacaoRealizada[cpfRaw] ? 
                    <>
                      Avaliação REALIZADA
                      <img src={iconAvaliacaoRealizada} alt="Ícone Avaliação Realizada" className="icon-avaliacao-realizada" />
                    </> : 
                    <>
                      Avaliação Disponível
                      <img src={iconAvaliacao} alt="Ícone Avaliação" className="icon-avaliacao" />
                    </>
                  }
                </BootstrapCard.Body>
              </BootstrapCard>
            </div>
          </Col>
        ))}
      </Row>
      {!avaliacaoRealizada[cpfRaw] && (
        <ZohoForm
          username={username}
          instituicaoNome={instituicaoNome}
          birthDate={birthDate}
          cpfFormatted={cpfFormatted}
        />
      )}
    </Container>
  );
};

export default PainelUsuario;
