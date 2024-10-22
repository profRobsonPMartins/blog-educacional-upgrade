import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Tempo de transição entre os slides (em milissegundos)
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2, // Em telas de até 1200px, mostre 2 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Em telas de até 768px, mostre 1 card
          slidesToScroll: 1,
        },
      },
    ],
  };

  const comments = [
    {
      name: "Ana",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "Desenvolver aplicações web foi incrível! A lógica da programação foi um desafio, mas os professores ajudaram.",
    },
    {
      name: "Carlos",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "O curso me deu a chance de trabalhar no front-end e back-end. Agora me sinto confiante para criar aplicações.",
    },
    {
      name: "Fernanda",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "Os projetos práticos foram essenciais. Tive dificuldades com algumas linguagens, mas foi gratificante.",
    },
    {
      name: "Lucas",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "Programar não é fácil. Enfrentei muitos erros, mas aprendi com eles e agora vejo a programação mais clara.",
    },
    {
      name: "Mariana",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "Aprender React e Node.js foi desafiador, mas recompensador. Nunca pensei que conseguiria construir uma aplicação!",
    },
    {
      name: "João",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "O maior desafio foi aprender a debugar o código. Com prática, aprendi a identificar problemas rapidamente.",
    },
    {
      name: "Julia",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "As aulas de lógica foram fundamentais. Ajudaram-me a desenvolver raciocínio crítico e resolver problemas.",
    },
    {
      name: "Felipe",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "Trabalhar em grupo foi valioso. Aprendi a colaborar e ouvir ideias diferentes, enriquecendo meu aprendizado.",
    },
    {
      name: "Bianca",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "O curso me ensinou que a programação é iterativa. Encontrar dificuldades é normal; persistir é essencial.",
    },
    {
      name: "Renato",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "Criar uma aplicação no navegador foi emocionante. Ver o código ganhar vida não tem preço!",
    },
    {
      name: "Sofia",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "Entender bancos de dados foi desafiador, mas agora tenho uma boa base para construir aplicações dinâmicas.",
    },
    {
      name: "Ricardo",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "Tive dificuldades com sintaxes, mas após praticar, tudo começou a fazer sentido. Prática leva à perfeição!",
    },
    {
      name: "Gabriela",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "Desenvolver uma API foi interessante. Entender a comunicação entre sistemas me deu nova perspectiva.",
    },
    {
      name: "André",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "No início, desanimei por não conseguir fazer funcionar. Ao pedir ajuda, percebi que todos passam por isso.",
    },
    {
      name: "Clara",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "Participar de hackathons ajudou a aplicar o que aprendi. A pressão de entregar rápido melhorou meu aprendizado.",
    },
    {
      name: "Leonardo",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "O curso me mostrou que programação é mais que código; é sobre resolver problemas e criar soluções.",
    },
    {
      name: "Natália",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "As revisões e feedback dos professores foram essenciais. Ajudaram-me a melhorar meu código e entender mais.",
    },
    {
      name: "Gustavo",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "A transição de teoria para prática foi desafiadora, mas recompensadora. Ver o projeto finalizado motivou-me muito.",
    },
    {
      name: "Tânia",
      role: "Aluna",
      image: 'https://via.placeholder.com/80',
      comment: "O mais difícil foi lidar com a frustração de não resolver problemas. Aprendi a ser resiliente e persistente.",
    },
    {
      name: "Daniel",
      role: "Aluno",
      image: 'https://via.placeholder.com/80',
      comment: "O desenvolvimento ágil me fascinou. Trabalhar em sprints e melhorar continuamente foi incrível!",
    },
  ];
  


  return (
    <div className="testimonials-section">
      <h2>Experiências de quem faz a diferença</h2>
      <h4>Alunos compartilham suas experiências</h4>
      <Slider {...settings}>
        {comments.map((comment, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <img src={comment.image} alt={comment.name} className="testimonial-image" />
              <h3 className="testimonial-name">{comment.name}</h3>
              <p className="testimonial-role">{comment.role}</p>
              <p className="testimonial-comment">{comment.comment}</p>
              <i className="fas fa-quote-right"></i>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
