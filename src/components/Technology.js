import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Technology.css';
import PsicoAppImage from '../images/Psico-app.png'; // Importando a imagem

function Technology() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1 // Ajuste conforme necessário
    });

    return (
        <div className="technology" ref={ref}>
            
            <div className={`technology__content ${inView ? 'fadeIn' : 'hidden'}`}>
                <img src={PsicoAppImage} alt="Psico App" className={`technology__image ${inView ? 'fadeInLeft' : 'hidden'}`}/>
                <div className={`technology__description ${inView ? 'fadeInUp' : 'hidden'}`}>
                    <h2>Realize suas avaliações pelo celular</h2>
                    <p>
                        Nossa tecnologia conta com monitorização de eventos e
                        acidentes para retroalimentação
                        da plataforma e melhoria do
                        algoritmo de predição de risco
                        com ferramentas de I.A.
                    </p>
                    <h3>Relatórios conclusivos:</h3>
                    <ul>
                        <li>Predição de risco (algoritimos de i.a.)</li>
                        <li>Armazenamento (laudos em conformidade com lgpd)</li>
                        <li>Proteção jurídica (laudos que seguem preceitos éticos e científicos)</li>
                        <li>Acesso remoto (avaliações realizadas em qualquer hora e local)</li>
                        <li>Embasamento técnico (ferramenta com instrumentos validos com técnicas de i.a.)</li>
                        <li>Padronização (padronização, escalabilidade e rastreamento)</li>
                    </ul>
                    <h2>Disponivel para Android e embreve para iOS.</h2>
                </div>
            </div>
        </div>
    );
}

export default Technology;
