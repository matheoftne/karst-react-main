import React from "react";
import { useRef, useState } from "react";
import './Quantity.css'

// Compenents pour gérer l'incrémentation de la quantité

export default function Quantity() {
    const [compteur, setCompteur] = useState(0);

    const addToCompteur = () => {
        setCompteur(compteur + 1)
    }

    const removeToCompteur = () => {
        setCompteur(compteur - 1)
    }

    return (
        <div id="quantityAdd">
            <p>Quantity</p><div id="btnQtn"><button onClick={removeToCompteur}>-</button><span>{compteur}</span><button onClick={addToCompteur}>+</button></div>
        </div>
    )
};