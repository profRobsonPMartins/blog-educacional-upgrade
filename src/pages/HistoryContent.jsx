import React from 'react';
import '../styles/HistoryContent.css';

const HistoryContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.historiadomundo.com.br/', '_blank');
  };

  return (
    <div className="history-container">
      <h1>História e Inteligência Artificial</h1>
      <p>
        A integração da história com a inteligência artificial permite uma nova maneira de explorar o passado e analisar eventos históricos...
      </p>
      <h2>Aplicações da História na Tecnologia</h2>
      <ul>
        <li>Pesquisa em história digital</li>
        <li>Análise de grandes dados históricos</li>
        <li>Preservação de patrimônios culturais digitais</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default HistoryContent;