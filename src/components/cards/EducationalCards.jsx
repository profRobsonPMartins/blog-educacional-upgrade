import React from "react";
import './EducationalCards.css'

const cards = [

    { title: 'Matemática e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 21, classes: 36, icon: 'fa-calculator' },
    { title: 'Física Aplicada a Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 18, classes: 30, icon: 'fa-rocket' },
    { title: 'Quimica Digital', teacher: 'Prof. Joanie M. Reid', students: 20, classes: 34, icon: 'fa-flask' },
    { title: 'Hstória e Inteligência Artificial', teacher: 'Prof. Joanie M. Reid', students: 15, classes: 25, icon: 'fa-robot' },
    { title: 'Geografia Digital', teacher: 'Prof. Joanie M. Reid', students: 22, classes: 40, icon: 'fa-globe' },
    { title: 'Biologia e Bioinformática', teacher: 'Prof. Joanie M. Reid', students: 19, classes: 32, icon: 'fa-dna' },
    { title: 'Literatura e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 25, classes: 38, icon: 'fa-book' },
    { title: 'Sociologia e Redes Sociais', teacher: 'Prof. Joanie M. Reid', students: 16, classes: 28, icon: 'fa-users' },
    { title: 'Filosofia e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 17, classes: 27, icon: 'fa-brain' },

]

const EducationalCards = () => {

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
                        <button className="subscribe-btn">Subscribe Now</button>
                    </div>
                 ))}
            </div>
        </section>
    )
}

export default EducationalCards;