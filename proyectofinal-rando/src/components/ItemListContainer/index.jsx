import React from 'react'
import './item-list-container.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='containerItem'>{greeting}</div>
  )
}

export default ItemListContainer;