import React from 'react';
import '../styles/LiteratureContent.css';

const LiteratureContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.coursera.org/courses?query=literature', '_blank');
  };

  return (
    <div className="literature-container">
      <h1>Literatura e Tecnologia</h1>
      <p>
        A literatura tem se adaptado à era digital, com novas formas de leitura, produção e compartilhamento de obras...
      </p>
      <h2>Aplicações da Literatura na Tecnologia</h2>
      <ul>
        <li>Publicações digitais e e-books</li>
        <li>Análise de texto com IA</li>
        <li>Armazenamento de obras literárias em plataformas online</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default LiteratureContent;