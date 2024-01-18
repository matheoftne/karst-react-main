import React from "react";
import '../products/Products.css';
import Quantity from '../components/buttons/Quantity'

export default function WoodlessArtistPencils() {
    return (
        <div id="product-container">
            <div id="left">
                <div id="info">
                    <h3 id="titre">Woodless Artist Pencils</h3>
                    <h4 id="prix">70.00€</h4>
                </div>
                <div>
                    <Quantity/>
                </div>
                <button id="buy">Add to cart</button>
            </div>
    
            <div id="right">
                <img id="product-img" src="https://cdn.sanity.io/images/asz68zwp/production/8319d0c800b453a848fb32978838f91c5f1432be-1906x1906.jpg?w=1366&h=1366&auto=format" alt="" />
            </div>
        </div> 
    )
};