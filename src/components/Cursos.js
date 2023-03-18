import React from 'react';
import '../styles/Cursos.css';

function Cursos({ nombre, descripcion }) {
  return (
    <div className='curso'>
        <h4>{nombre}</h4>
        <p>{descripcion}</p>
        <a href="#">Ver mas</a>
    </div>
  );
}

export default Cursos;