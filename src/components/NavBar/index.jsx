import React from "react";
import CartWidget from "../CartWidget/index"
import './style.scss'

const NavBar = () => {
    return (
        <ul>
            <li>
                <a href="#home">Inicio</a>
            </li>
            <li>
                <a href="#news">Catalogo</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="#about">About us</a>
            </li>
            <CartWidget/>
        </ul>
            
    );
};

export default NavBar;
