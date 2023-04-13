import React, { useContext, useEffect, useState } from 'react';
import { User } from '../../Context/userProvider';
import ListProducts from '../ListProducts';

const ProductsContainer = () => {

  const { token } = useContext(User);

  const [ productos, setProductos] = useState(null)

  useEffect(() => {
      const obtenerProductos = async() => {
          const respuestaJson = await fetch('http://localhost:8000/api/productos', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `${token}`
              }
          })
  
          const respuesta = await respuestaJson.json();
         
          setProductos(respuesta)

      }

      obtenerProductos()
  },[token])

  return (
    <>
      {
        productos ?  <ListProducts productos={productos}/> : <h1>No hay productos</h1>
      }
    </>
   
  )
}

export default ProductsContainer