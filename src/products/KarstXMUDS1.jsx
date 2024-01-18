import React from "react";
import '../products/Products.css';
import Quantity from '../components/buttons/Quantity'

export default function KarstXMUDS1() {
    return (
        <div id="product-container">
            <div id="left">
                <div id="info">
                    <h3 id="titre">Karst x Mud Desk Set (Limited Edition)</h3>
                    <h4 id="prix">175.00€</h4>
                </div>
                <div>
                    <Quantity/>
                </div>
                <button id="buy">Add to cart</button>
            </div>
    
            <div id="right">
                <img id="product-img" src="https://cdn.sanity.io/images/asz68zwp/production/8edf274db99da678679a03db2f3b576dec2bf635-1906x1906.jpg?w=1366&h=1366&auto=format" alt="" />
            </div>
        </div> 
    )
};