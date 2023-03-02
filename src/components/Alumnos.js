import React from 'react';
import '../styles/Alumnos.css';

function Alumnos( {nombre, apellido, edad} ) {
  return (
    <div className='alumno'>
      <li>{nombre}</li>
      <li>{apellido}</li>
      <li className='li-edad'>{edad}<b> años.</b></li>
    </div>
  );
}

export default Alumnos;