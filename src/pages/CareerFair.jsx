import React from 'react';
import img03 from '../components/img/unisepe.jpg';
import '../styles/BlogDetail.css';

const CareerFair = () => {
  return (
    <div className="blog-detail">
      <h1>Feira de Profissões na UNISEPE</h1>
      <img src={img03} alt="Feira de Profissões na UNISEPE" className="detail-image" />
      <p className="blog-date">Data: 11.11.2023 - Autor: A Definir</p>
      <p>
        Na visita à UNISEPE em Registro-SP, os alunos do ensino médio participaram da Feira de Profissões, onde
        exploraram diversas opções de carreiras. Os estudantes tiveram a chance de interagir com profissionais e
        aprender mais sobre as habilidades e qualificações exigidas para diferentes áreas.
      </p>
      <p>
        Essa experiência proporcionou uma visão enriquecedora sobre o futuro acadêmico e profissional, ajudando os
        alunos a tomar decisões informadas sobre suas trajetórias.
      </p>
      <a 
        href="https://portal.unisepe.com.br/unisepe/lp/?filial=0003" // Link do Instituto Oceanográfico da USP
        target="_blank" 
        rel="noopener noreferrer" 
        className="visit-department-btn"
      >
        Visitar o Departamento de Oceanografia
      </a>
    </div>
  );
};

export default CareerFair;
