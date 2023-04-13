import React from 'react';
import './styles.css';

const CardProduct = ({ producto }) => {
  return (
    <div className='container-card-product'>
        <div>
          <img src={producto.urlImagen}/>
        </div>
        <p>Nombre: {producto.nombre}</p>
        <p>Descripcion: {producto.descripcion}</p>
        <p>Precio: {producto.precio}</p>
    </div>
  )
}

export default CardProduct