import React from 'react';
import '../styles/Alumnos.css';

function Alumnos(props) {
  return (
    <div className='alumno'>
        <li>{props.nombre}</li>
        <li>{props.apellido}</li>
        <li>{props.edad}</li>
    </div>
  );
}

export default Alumnos;