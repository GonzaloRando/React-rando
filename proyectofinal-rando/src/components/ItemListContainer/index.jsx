import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './item-list-container.css'

function ItemListContainer ({ greeting }) {

  function prueba() {
    console.log('prueba prop function');
  }

return (
  <div className='list-item-container'>
    <ItemCount initial={0} stock={5} onAdd={prueba} />  
  </div>
)
}


export default ItemListContainer;