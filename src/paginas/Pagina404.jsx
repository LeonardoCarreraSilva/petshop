import React from 'react';
import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'
const Pagina404 = () =>{
  return(
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={imagem} alt="ilustração do doguito" />
      <p className="naoencontrado-texto">
        Ops, Essa pagina nao existe!
      </p>

    </main>

  )
}

export default Pagina404