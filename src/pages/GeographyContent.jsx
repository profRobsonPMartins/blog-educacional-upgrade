import React from 'react';
import '../styles/GeographyContent.css';

const GeographyContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.tudogeo.com.br/', '_blank');
  };

  return (
    <div className="geography-container">
      <h1>Geografia Digital</h1>
      <p>
        A geografia digital está transformando a maneira como entendemos o mundo e interagimos com ele...
      </p>
      <h2>Aplicações da Geografia na Tecnologia</h2>
      <ul>
        <li>Geoprocessamento e sistemas de informação geográfica</li>
        <li>Mapeamento e análise espacial</li>
        <li>Sensoriamento remoto</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default GeographyContent;
