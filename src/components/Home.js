import React from 'react';
import Alumnos from "./Alumnos.js";
import Cursos from "./Cursos.js";

function Home(){
  return (
    <div>
      <header>
        <h1>Escuela IT!</h1>
      </header>
      <main>
        <div className='content-cursos'>
          <Cursos/>
        </div>
        <div className='content-alumnos'>
          <Alumnos/>
        </div>
      </main>
    </div>
  );
}

export default Home;