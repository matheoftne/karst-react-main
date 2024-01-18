import React from "react";
import { Link } from 'react-router-dom';

// Components du header

export default function Navbar() {
    return (
        <header id="header">
            {/* Header */}
            <div>
                <Link to='/'><p className="logo-txt">karst</p></Link>
            </div>
            {/* Logo */}
            <div>
                <nav>
                    <ul id="menu">
                        <li>Shop</li>
                        <li>Discover</li>
                        <li>Custom</li>
                        <li>Bookmark</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
            {/*Espace client */}
            <div>
                <Link to='/login'><i class="fa-regular fa-circle-user"></i></Link>
                <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>     
            </div>
        </header>
    )
};


