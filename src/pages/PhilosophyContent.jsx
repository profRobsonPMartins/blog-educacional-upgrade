import React from 'react';
import '../styles/PhilosophyContent.css';

const PhilosophyContent = () => {
  const handleExploreMore = () => {

    window.open('https://razaoinadequada.com/', '_blank');
    
  };

  return (
    <div className="philosophy-container">
      <h1>Filosofia e Tecnologia</h1>
      <p>
        A filosofia explora questões fundamentais da existência e do conhecimento, e a tecnologia abre novas reflexões...
      </p>
      <h2>Aplicações da Filosofia na Tecnologia</h2>
      <ul>
        <li>Ética e Inteligência Artificial</li>
        <li>Impactos da tecnologia na sociedade</li>
        <li>Reflexão sobre o futuro digital</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default PhilosophyContent;