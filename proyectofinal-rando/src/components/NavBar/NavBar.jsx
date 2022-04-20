import React from "react";
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
        </div>
    );
}

export default NavBar;