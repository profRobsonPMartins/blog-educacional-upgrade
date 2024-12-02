import React from "react";
import './Newsletter.css'
import { useState } from "react";


const Newsletter = () => {

    // Lógica aqui
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (e) => {

        e.preventDefault();

        fetch("https://api-conect-email-cqxv.onrender.com/email/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setMessage("Deu bom !!!")
                } else {
                    setMessage("Deu ruim !!!")
                }
            })
            .catch((erro) => {
                console.log("Erro: ", erro);
            })
    }

    return (
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
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email"
                        value={email}
                        onChange={(e) => (setEmail(e.target.value))}
                        placeholder="Digite seu email*"
                    />
                    <button type="submit">Enviar</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
        </section>
    )
}

export default Newsletter;