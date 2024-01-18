import React from "react";
import '../products/Products.css';
import Quantity from '../components/buttons/Quantity'

export default function HardcoverNotebook() {
    return (
        <div id="product-container">
            <div id="left">
                <div id="info">
                    <h3 id="titre">Hardcover Notebook A5</h3>
                    <h4 id="prix">26.95€</h4>
                </div>
                <div>
                    <Quantity/>
                </div>
                <button id="buy">Add to cart</button>
            </div>
    
            <div id="right">
                <img id="product-img" src="https://cdn.sanity.io/images/asz68zwp/production/797d0aaa6cd021a74cd2d012addc1582376462a8-1906x1906.jpg?w=1366&h=1366&auto=format" alt="" />
            </div>
        </div> 
    )
};