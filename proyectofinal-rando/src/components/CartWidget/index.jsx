import React from 'react'
import './cart-widget.css';
import cartPic from './cartIcon/cartPic.png'

const CartWidget = () => {
  return (
    <ul className='cartPic'>
        <img src={cartPic} alt="carrito" />
    </ul>
  );
}

export default CartWidget;