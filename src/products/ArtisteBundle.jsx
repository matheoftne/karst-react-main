import React from "react";
import '../products/Products.css';
import Quantity from '../components/buttons/Quantity'

export default function ArtisteBundle() {
    return (
        <div id="product-container">
            <div id="left">
                <div id="info">
                    <h3 id="titre">Artist Bundle</h3>
                    <h4 id="prix">120.00€</h4>
                </div>
                <div>
                    <Quantity/>
                </div>
                <button id="buy">Add to cart</button>
            </div>
    
            <div id="right">
                <img id="product-img" src="https://cdn.sanity.io/images/asz68zwp/production/52b319e2d3b96b52afa8d0e8e734c770cee9f606-1906x1906.jpg?w=1366&h=1366&auto=format" alt="" />
            </div>
        </div> 
    )
};
