import React from 'react';
import '../styles/Cursos.css';

function Cursos( {nombre, descripcion} ) {
  return (
    <div className='curso'>
      <main className='curso-main'>
        <h4>{nombre}</h4>
        <p>{descripcion}</p>
      </main>
      <div className='curso-ver'>
        <a href="#">Ver mas</a>
      </div>
    </div>
  );
}

export default Cursos;