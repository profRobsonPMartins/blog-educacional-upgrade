import React from "react";
import { useState } from "react";

const Contact = () => {

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
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email"
                  value={email}
                 onChange={(e) => (setEmail(e.target.value))}
                placeholder="Digite seu email*"
            />
            <button type="submit">Enviar</button>
            {message && <p>{message}</p>}
        </form>
    )
}
export default Contact;