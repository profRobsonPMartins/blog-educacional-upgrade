import React from "react";
import './MathContent.css';



const MathContent = () => {

    const handleExploreMore = () =>{
      window.open('https://pt.khanacademy.org/', '_blank')
    }

    return(
       <div className="math-container">

         <h1>Conteudo de Matematica</h1>
          <button className="" onClick={handleExploreMore}>
            Saiba Mais
          </button>

       </div>
    )
}

export default MathContent