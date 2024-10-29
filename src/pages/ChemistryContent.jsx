import React from 'react';
import '../styles/ChemistryContent.css';

const ChemistryContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.soquimica.com.br/', '_blank');
  };

  return (
    <div className="chemistry-container">
      <h1>Química Digital</h1>
      <p>
        A química é fundamental para o desenvolvimento de novas tecnologias, especialmente em áreas como materiais e energia...
      </p>
      <h2>Aplicações da Química na Tecnologia</h2>
      <ul>
        <li>Desenvolvimento de baterias e armazenamento de energia</li>
        <li>Produção de materiais avançados</li>
        <li>Processos de fabricação em nanotecnologia</li>
        <li>Pesquisa farmacêutica</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default ChemistryContent;
