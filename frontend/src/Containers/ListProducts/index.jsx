import React from 'react';
import CardProduct from '../../Components/cardProduct';
import './styles.css'

const ListProducts = ({ productos }) => {
  return (
    <div className='container-list-products'>
        {
            productos.map( producto => {
                return <CardProduct key={producto._id} producto={ producto }/>
            }) 
        }
    </div>
  )
}

export default ListProducts