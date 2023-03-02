import React from 'react';
import Cursos from "./Cursos.js";
import '../styles/Home.css';

function Home(){
  return (
    <div className='content'>
      <header className='titulo'>
        <h1>Escuel<b>IT</b>a!</h1>
        <p className='content-descripcion'>!Estudia cursos sobre el sector tecnologico en la comodidad de tu casa!</p>
      </header>
      <section className='content-cursos'>
          <Cursos
            nombre='Matematica'
            descripcion='Catedra anual en conceptos de basicos de matematicas, analisis de funciones, derivadas, integrales y pensamiento deductivo.' />
          <Cursos
            nombre='Ingles'
            descripcion='Introduccion al ingles basico nivel B1 con base en ingenieria de sistemas de informacion.' />
          <Cursos
            nombre='Ingles'
            descripcion='Introduccion al ingles basico nivel B1 con base en ingenieria de sistemas de informacion.' />
      </section>
    </div>
  );
}

export default Home;