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
          <Cursos
            nombre='Mateaticas'
            descripcion='Catedra anual de matematicas con base en numeros imaginarios' />
          <Alumnos
            nombre='Lucas'
            apellido='Villalba'
            edad='23'
          />
      </section>
    </div>
  );
}

export default Home;