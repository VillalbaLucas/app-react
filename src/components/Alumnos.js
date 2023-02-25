import React from 'react';
import '../styles/Alumnos.css';

function Alumnos(props) {
  return (
    <div className='alumno'>
        <li>{props.nombre}</li>
        <li>{props.apellido}</li>
        <li className='li-edad'>{props.edad}<b> años.</b></li>
    </div>
  );
}

export default Alumnos;