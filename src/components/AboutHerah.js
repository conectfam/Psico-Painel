// AboutHerah.js
import React from 'react';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import AboutUsImage from '../images/quem-somos.png'; // Importando a imagem
import './AboutHerah.css';

const AboutHerah = () => {
    return (
        <div>
            <main>
                <img src={AboutUsImage} alt="Quem Somos" className="aboutHerah__image"/>
                <div className="aboutHerah__content">
                    <p>
                    A Quality Seg é uma empresa especializada em Engenharia de Segurança e Medicina do trabalho com atuação desde o ano de 2008, trabalhando e desenvolvendo política sustentável em gestão ocupacional.

Disponibilizamos de uma estrutura completa e com equipe altamente qualificada de médicos do trabalho e especialistas para cuidar e zelar pela saúde integridade dos colaboradores.

Oferecemos também gestão de segurança e capacitação profissional com implementações de programas de treinamento com a missão de orientar a maneira mais segura de trabalho para cada função a ser exercida.

A Quality Seg conta com unidades próprias e credencias em todo o território nacional, com capacidade atual de 200 atendimentos diários, recentemente atingiu a marca de 300.000 capacitações.

No ano de 2019 foi vencedora do Prêmio Empreendedores destacando ainda mais a atuação latente na comunidade lençoense.
                    </p>
                    <h2>MISSÃO</h2>
                    <p>
                    Desenvolver soluções na Gestão de Segurança e Medicina do Trabalho com credibilidade e confiança junto aos nossos clientes, preservando e valorizando a vida de seus colaboradores e consequentemente obter maior produtividade e redução de custos operacionais.
                    </p>
                    <h2>VISÃO</h2>
                    <p>
                    Atender com excelência os trabalhos voltados à necessidade de cada empresa, sendo referência de qualidade no mercado.
                    </p>
                    <h2>VALORES</h2>
                    <p>
                    Todas as nossas ações são norteadas pela ética, responsabilidade, comprometimento e transparência no relacionamento com nossos clientes e colaboradores.
                    </p>
                </div>
            </main>
            <Contact />
           
        </div>
    );
}

export default AboutHerah;
