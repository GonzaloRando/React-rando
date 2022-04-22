import React from "react";
import CartWidget from "../CartWidget";
import './NavBar.css';
import logomotorola from './img/logomotorola.jpg';


function NavBar(props) {
    return (
        
        <div>
            <ul className="nav">
                <img src={logomotorola} alt="motorola"/>
                <a href="#">APX Familiy</a>
                <a href="#">MotoTrbo</a>
                <a href="#">Support</a>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;