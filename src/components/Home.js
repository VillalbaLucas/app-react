import React from 'react';
import Cursos from "./Cursos.js";
import '../styles/Home.css';

function Home(){
  return (
    <div className='content'>
      <header className='titulo'>
        <h1>Escuela IT!</h1>
        <p className='content-descripcion'>!Estudia a distancia las carreras mas importantes de la actualidad!</p>
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