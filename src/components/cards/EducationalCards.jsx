import React from "react";
import './EducationalCards.css'
import { useNavigate } from "react-router-dom";

const cards = [

    { title: 'Matemática e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 21, classes: 36, icon: 'fa-calculator', path: '/matematica' },
    { title: 'Física Aplicada a Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 18, classes: 30, icon: 'fa-rocket', path: '/fisica' },
    { title: 'Quimica Digital', teacher: 'Prof. Joanie M. Reid', students: 20, classes: 34, icon: 'fa-flask', path: '/quimica'},
    { title: 'História e Inteligência Artificial', teacher: 'Prof. Joanie M. Reid', students: 15, classes: 25, icon: 'fa-robot', path: '/historia'},
    { title: 'Geografia Digital', teacher: 'Prof. Joanie M. Reid', students: 22, classes: 40, icon: 'fa-globe' , path: '/geografia'},
    { title: 'Biologia e Bioinformática', teacher: 'Prof. Joanie M. Reid', students: 19, classes: 32, icon: 'fa-dna', path: '/biologia'},
    { title: 'Literatura e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 25, classes: 38, icon: 'fa-book' , path: '/literatura'},
    { title: 'Sociologia e Redes Sociais', teacher: 'Prof. Joanie M. Reid', students: 16, classes: 28, icon: 'fa-users', path: '/sociologia'},
    { title: 'Filosofia e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 17, classes: 27, icon: 'fa-brain', path: '/filosofia'},

]




const EducationalCards = () => {

    const navigate = useNavigate();

    const handleSubscribreClick = (path) =>{
        navigate(path)
    }

    return (
        <section className="cards-section">
            <h2>Cards Educacionais</h2>
            <p>
                Explore os principais temas que conectam tecnologia e inovação
                com as áreas essenciais do ensino medio, preparando você para o futuro.
            </p>

            <div className="cards-container">
                 {cards.map((card, index) => (
                    <div key={index} className="card">
                        <div className="card-icon">
                            <i className={`fas ${card.icon}`}></i>
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.teacher}</p>
                        <div className="card-info">
                            <span><i className="fas fa-users"> {card.students} </i> Students</span>
                            <span><i className="fas fa-book-open"> {card.classes} </i> Classes</span>
                        </div>
                        <button className="subscribe-btn" onClick={() => handleSubscribreClick(card.path)}>
                            Subscribe Now
                        </button>
                    </div>
                 ))}
            </div>
        </section>
    )
}

export default EducationalCards;