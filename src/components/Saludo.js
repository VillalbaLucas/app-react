import React from "react";
import "../styles/Saludo.css";

function Saludo() {
  return (
    <div>
      <h1>Hello World in React!</h1>
      <img
        className='logo'
        src={require('../imagenes/logo512.png')}
        alt='react-logo'
      />
      <div className='content-lorem'>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
}

export default Saludo;