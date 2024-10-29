import React from "react";
import './AssuntosDestaque.css';

const AssuntosDestaque = () => {
    return (
        <section className="featured-topics">
            <h2>Assuntos em Destaque</h2>
            <p>Explore temas que desenvolvem habilidades práticas e profissionais, como artes culinárias, programação de computadores, design gráfico e muito mais.</p>
            <div className="topics-container">
                <div className="topic-card">
                    <i className="fas fa-code"></i>
                    <h3>Programação</h3>
                    <p>Aprenda a criar aplicativos e resolver problemas através da lógica e da criatividade.</p>
                    <button className="topic-button" onClick={() => window.open('https://www.w3schools.com', '_blank')}>
                        Saiba Mais
                    </button>
                </div>

                <div className="topic-card">
                    <i className="fas fa-leaf"></i>
                    <h3>Meio Ambiente</h3>
                    <p>Explore questões ambientais e descubra como proteger nosso planeta.</p>
                    <button className="topic-button" onClick={() => window.open('https://ipecpesquisas.org.br/projetobotocinza/', '_blank')}>
                        Saiba Mais
                    </button>
                </div>

                <div className="topic-card">
                    <i className="fas fa-book"></i>
                    <h3>Leitura</h3>
                    <p>Descubra o poder da leitura e como ela pode enriquecer seu conhecimento e criatividade.</p>
                    <button className="topic-button" onClick={() => window.open('https://www.todamateria.com.br/lingua-portuguesa/', '_blank')}>
                        Saiba Mais
                    </button>
                </div>

                <div className="topic-card">
                    <i className="fas fa-balance-scale"></i>
                    <h3>Equilíbrio</h3>
                    <p>Aprenda sobre a importância do equilíbrio entre vida pessoal e profissional.</p>
                    <button className="topic-button" onClick={() => window.open('https://tcc-psicologia.onrender.com/', '_blank')}>
                        Saiba Mais
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AssuntosDestaque;
