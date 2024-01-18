import React from "react";
import '../products/Products.css';
import Quantity from '../components/buttons/Quantity'

export default function WoodlessPencils() {
    return (
        <div id="product-container">
            <div id="left">
                <div id="info">
                    <h3 id="titre">Woodless Pencils</h3>
                    <h4 id="prix">22.00€</h4>
                </div>
                <div>
                    <Quantity/>
                </div>
                <button id="buy">Add to cart</button>
            </div>
    
            <div id="right">
                <img id="product-img" src="https://cdn.sanity.io/images/asz68zwp/production/dd6ad0f1863e874400b9a35da6212f851de80141-1906x1906.jpg?w=1366&h=1366&auto=format" alt="" />
            </div>
        </div> 
    )
};