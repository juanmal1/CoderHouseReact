import React from "react";
import CartWidget from "../CartWidget/index"
import {Link} from "react-router-dom"
import Logo from "../Logo/index"
import './style.scss'

const NavBar = () => {
    return (
        <div>
            <Logo/>
        <ul>
            
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/human">Human</Link>
            </li>
            <li>
                <Link to="/category/alien">Alien</Link>
            </li>
            <CartWidget/>
        
        </ul>

        </div>

    );
};

export default NavBar;
