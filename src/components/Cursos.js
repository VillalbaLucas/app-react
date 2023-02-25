import React from 'react';
import '../styles/Cursos.css';

function Cursos(props) {
  return (
    <div className='curso'>
        <h4>{props.nombre}</h4>
        <p>{props.descripcion}</p>
    </div>
  );
}

export default Cursos;