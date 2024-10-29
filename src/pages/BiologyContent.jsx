import React from 'react';
import '../styles/BiologyContent.css';

const BiologyContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.biologianet.com/', '_blank');
  };

  return (
    <div className="biology-container">
      <h1>Biologia e Bioinformática</h1>
      <p>
        A bioinformática aplica princípios da biologia e ciência da computação para o entendimento de dados biológicos...
      </p>
      <h2>Aplicações da Biologia na Tecnologia</h2>
      <ul>
        <li>Genômica e proteômica</li>
        <li>Biotecnologia</li>
        <li>Ecologia computacional</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default BiologyContent;