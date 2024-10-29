import React from 'react';
import '../styles/SociologyContent.css';

const SociologyContent = () => {
  const handleExploreMore = () => {
    window.open('https://cafecomsociologia.com/', '_blank');
  };

  return (
    <div className="sociology-container">
      <h1>Sociologia e Redes Sociais</h1>
      <p>
        A sociologia estuda as interações e as transformações sociais, e com as redes sociais, esses estudos foram ampliados...
      </p>
      <h2>Aplicações da Sociologia na Tecnologia</h2>
      <ul>
        <li>Análise de dados de redes sociais</li>
        <li>Estudos de comportamento digital</li>
        <li>Impacto das mídias sociais nas relações sociais</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default SociologyContent;