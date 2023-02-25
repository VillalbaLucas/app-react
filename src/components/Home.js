import React from 'react';
import Alumnos from "./Alumnos.js";
import Cursos from "./Cursos.js";
import '../styles/Home.css';

function Home(){
  return (
    <div className='content'>
      <header className='titulo'>
        <h1>Escuela IT!</h1>
      </header>
      <section className='content-section'>
        <article className='content-section-curso'>
          <Cursos
            nombre='Matematica'
            descripcion='Catedra anual en conceptos de basicos de matematicas, analisis de funciones, derivadas, integrales y pensamiento deductivo.' />
          <Cursos
            nombre='Ingles'
            descripcion='Introduccion al ingles basico nivel B1 con base en ingenieria de sistemas de informacion.' />
          <Cursos
            nombre='Ingles'
            descripcion='Introduccion al ingles basico nivel B1 con base en ingenieria de sistemas de informacion.' />
        </article>
        <article className='content-section-alumno'>
          <Alumnos
            nombre='Lucas'
            apellido='Villalba'
            edad='23'
          />
          <Alumnos
            nombre='Manuela'
            apellido='Urquiza'
            edad='23'
          />
          <Alumnos
            nombre='Hernan'
            apellido='Gomez'
            edad='30'
          />
        </article>
      </section>
    </div>
  );
}

export default Home;