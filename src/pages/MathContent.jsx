import React from 'react';
import '../styles/MathContent.css'; // Importar o CSS

const MathContent = () => {
    
  const handleExploreMore = () => {
    window.open('https://www.khanacademy.org/math', '_blank'); // Altere o URL para o site desejado
  };

  return (
    <div className="math-container">
      <h1>Matemática e Tecnologia</h1>
      <p>
        A relação entre a matemática e a tecnologia é profunda e abrangente. A matemática é o alicerce sobre o qual 
        muitas das inovações tecnológicas são construídas...
      </p>

      <h2>Aplicações da Matemática na Tecnologia</h2>
      <p>Na área de tecnologia, a matemática é utilizada para resolver problemas lógicos...</p>

      <ul>
        <li>Criptografia e segurança da informação</li>
        <li>Modelagem e simulação de fenômenos</li>
        <li>Desenvolvimento de algoritmos de IA</li>
        <li>Análise de dados e big data</li>
      </ul>

      <h2>Exemplos Práticos</h2>
      <p>Um exemplo comum é o uso de álgebra linear em machine learning...</p>

      <h2>Conclusão</h2>
      <p>Estudar matemática aplicada à tecnologia é essencial para quem deseja se destacar...</p>

      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default MathContent;