import React from "react";
import './Header.css'

const Header = () => {

    const toggleMobileMenu = () => {
        const menu = document.querySelector('.nav-menu')
        menu.classList.toggle('open')
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    EducaTec 3ºB
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre o curso</a></li>
                        <li><a href="#">Artigos</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
                <div className="get-started">
                    <a href="#start" className="btn01">
                        Get Started
                    </a>
                </div>
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </header>
        </>
    )
}
export default Header;