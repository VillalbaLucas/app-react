import React from 'react';
import '../styles/Cursos.css';

function Cursos(props) {
  return (
    <div className='curso'>
      <main className='curso-main'>
        <h4>{props.nombre}</h4>
        <p>{props.descripcion}</p>
      </main>
      <div className='curso-ver'>
        <a href="#">Ver mas</a>
      </div>
    </div>
  );
}

export default Cursos;