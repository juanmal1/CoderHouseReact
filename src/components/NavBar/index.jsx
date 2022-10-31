import React from "react";
import CartWidget from "../CartWidget/index"
import Logo from "../Logo/index"
import './style.scss'

const NavBar = () => {
    return (
        <div>
            <Logo/>
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
            <div className="serch">
                <input type="serch" />
            </div>

            <CartWidget/>
        
        </ul>

        </div>

    );
};

export default NavBar;
