import React from "react";
import '../products/Products.css';
import Quantity from '../components/buttons/Quantity'

export default function PraxisMethod() {
    return (
        <div id="product-container">
            <div id="left">
                <div id="info">
                    <h3 id="titre">Praxis Method - 3 Journal Set</h3>
                    <h4 id="prix">110.00€</h4>
                </div>
                <div>
                    <Quantity/>
                </div>
                <button id="buy">Add to cart</button>
            </div>
    
            <div id="right">
                <img id="product-img" src="https://cdn.sanity.io/images/asz68zwp/production/82ce18aaed478c9eb25291802d244abff15cabdb-1906x1906.jpg?w=1366&h=1366&auto=format" alt="" />
            </div>
        </div> 
    )
};

