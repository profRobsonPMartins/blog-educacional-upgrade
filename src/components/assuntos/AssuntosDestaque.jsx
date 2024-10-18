import React from "react";
import './AssuntosDestaque.css'


const AssuntosDestaque = () => {

    return (
        <section className="feature-topics">
            <h2>Assuntos em destaque</h2>
            <p>Explore temas que desenvolvem habilidades práticas e profissionais,
                como artes, programação de computadores, design gráfico e muito mais.
            </p>
            <div className="topics-container">

                <div className="topic-card">
                    <i className="fas fa-pencil-alt"></i>
                    <h3>Graphic Design</h3>
                    <p>Graphic Design is a program of study that...</p>
                </div>

                <div className="topic-card">
                    <i className="fas fa-laptop-code"></i>
                    <h3>Web Design</h3>
                    <p>Web Designis a program of study that...</p>
                </div>

                <div className="topic-card">
                    <i className="fas fa-heartbeat"></i>
                    <h3>Heath & Fitness</h3>
                    <p>Heath & Fitness is a program of study that...</p>
                </div>

                <div className="topic-card">
                    <i className="fas fa-briefcase"></i>
                    <h3>Business</h3>
                    <p>Business is a program of study that...</p>
                </div>

            </div>
        </section>
    )
}

export default AssuntosDestaque;