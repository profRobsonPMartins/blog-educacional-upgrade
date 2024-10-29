import React from 'react';
import '../styles/PhysicsContent.css';

const PhysicsContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.khanacademy.org/science/physics', '_blank');
  };

  return (
    <div className="physics-container">
      <h1>Física Aplicada à Tecnologia</h1>
      <p>
        A física desempenha um papel crucial no desenvolvimento de novas tecnologias e na melhoria das existentes...
      </p>
      <h2>Aplicações da Física na Tecnologia</h2>
      <ul>
        <li>Eletrônica e semicondutores</li>
        <li>Telecomunicações</li>
        <li>Energia renovável</li>
        <li>Robótica</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default PhysicsContent;
