import React from "react";
import './Newsletter.css'

const Newsletter = () => {

    return(
        <section className="newsletter-section">
            <div className="newsletter-container">
                <h1>EducaTec 3ºB</h1>
                <h2>Subscribe to our</h2>
                <h3><span>News</span>Letter</h3>
                <p>
                    Fique por dentro das últimas notícias e eventos da nossa escola ao se inscrever
                    em nossa newsletter. Receba diretamente em seu email informações valiosas
                    sobre nossos projetos educacionais, novidades, eventos e muito mais!
                </p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email*" />
                    <button type="submit">Subscribe Now</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;