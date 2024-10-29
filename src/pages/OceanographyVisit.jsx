import React from 'react';
import img01 from '../components/img/IOUSP.jpeg';
import '../styles/BlogDetail.css';

const OceanographyVisit = () => {
  return (
    <div className="blog-detail">
      <h1>Visita ao Instituto Oceanográfico: Ictioplâncton</h1>
      <img src={img01} alt="Instituto Oceanográfico da USP" className="detail-image" />
      <p className="blog-date">Data: 01.11.2023 - Autor: Instituto Oceanográfico da USP</p>
      <p>
        Os alunos do ensino médio visitaram o Instituto Oceanográfico da USP e tiveram a oportunidade de aprender sobre o
        ictioplâncton. Durante a visita, alunos do curso de Oceanografia apresentaram estudos e pesquisas sobre a
        importância desses organismos para o ecossistema marinho.
      </p>
      <p>
        A experiência proporcionou uma visão detalhada da biodiversidade marinha e destacou a importância da conservação
        dos oceanos, incentivando os estudantes a considerar carreiras voltadas para a área ambiental e biológica.
      </p>
      <a 
        href="https://www.io.usp.br" // Link do Instituto Oceanográfico da USP
        target="_blank" 
        rel="noopener noreferrer" 
        className="visit-department-btn"
      >
        Visitar o Departamento de Oceanografia
      </a>
    </div>
  );
};

export default OceanographyVisit;