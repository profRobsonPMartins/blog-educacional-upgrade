import React from 'react';
import './Hero.css';

const Hero = () => {

  return (
    <section className="hero">
      <div className="cap">
        <i className="fas fa-graduation-cap"></i> {/* Ícone de beca */}
      </div>
      {/* grid  */}
      <div className="hero-content">
        <div className="hero-text">
          <p className="subheading">Aprendendo Desenvolvimento de Sistemas no Ensino Médio</p>
          <h1>Projetos incríveis <br /> desenvolvidos por alunos!</h1>
          <div className="divider"></div>
          <p className="description">
            Desenvolva suas habilidades com conteúdos feitos por quem está transformando teoria em prática!
          </p>

          {/* features */}
          <div className="features">
            <div className="feature-item">
              <i className="fas fa-check-square icon"></i>
              <p>Multiple Resources</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-square icon"></i>
              <p>Live Classes</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-square icon"></i>
              <p>Cards Educacionais</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-square icon"></i>
              <p>Online Videos</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="hero-form">
          <h2>Inscreva-se</h2>
          <p>Cadastre-se agora e receba conteúdos exclusivos gratuitamente!</p>
          <form>
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="email@example.com" />
            <button type="submit">Get It Now</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Hero;
