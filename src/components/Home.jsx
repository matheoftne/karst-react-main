import React from "react";
import '../App.css';
import '../App'
import { useRef, useState } from "react";
import PraxisMethod from '../products/PraxisMethod';
import { Link } from 'react-router-dom';

// initialisation des données pour les afficher dans la page d'accueil

export default function Home() {
    // States de tous mes produits
    const [produits, setProduits] = useState([
        {id: 1, titre: "Praxis Method", prix: "110.00€", dir: '/products/praxismethod', img: 'https://cdn.sanity.io/images/asz68zwp/production/82ce18aaed478c9eb25291802d244abff15cabdb-1906x1906.jpg?w=1366&h=1366&auto=format'},
        {id: 2, titre: "Woodless Artist Pencils", prix: "70.00€", dir: '/products/woodlessartistpencils', img: 'https://cdn.sanity.io/images/asz68zwp/production/8319d0c800b453a848fb32978838f91c5f1432be-1906x1906.jpg?w=1366&h=1366&auto=format'},
        {id: 3, titre: "Softcover Notebook", prix: "26.95€", dir: '/products/softcovernotebook',  img: 'https://cdn.sanity.io/images/asz68zwp/production/e1bc8d0e8abf744c705fe59a5452051f0eb46e62-1906x1906.jpg?w=1366&h=1366&auto=format'},
        {id: 4, titre: "Woodless Pencils", prix: "22.00€", dir: '/products/woodlesspencils',  img: 'https://cdn.sanity.io/images/asz68zwp/production/dd6ad0f1863e874400b9a35da6212f851de80141-1906x1906.jpg?w=1366&h=1366&auto=format'},
        {id: 5, titre: "Karst x Mud Desk Set (Limited Edition)", prix: "175.00€", dir: '/products/karstxmuds1',  img: 'https://cdn.sanity.io/images/asz68zwp/production/8edf274db99da678679a03db2f3b576dec2bf635-1906x1906.jpg?w=1366&h=1366&auto=format'},
        {id: 6, titre: "Hardcover Notebook", prix: "26.95€", dir: '/products/hardcovernotebook',  img: 'https://cdn.sanity.io/images/asz68zwp/production/797d0aaa6cd021a74cd2d012addc1582376462a8-1906x1906.jpg?w=1366&h=1366&auto=format'},
        {id: 7, titre: "Artiste Bundle", prix: "120.00€", dir: '/products/artistebundle',  img: 'https://cdn.sanity.io/images/asz68zwp/production/52b319e2d3b96b52afa8d0e8e734c770cee9f606-1906x1906.jpg?w=1366&h=1366&auto=format'},
        {id: 8, titre: "Karst x Mud Desk Set (Limited Edition)", prix: "175.00€", dir: '/products/karstxmuds2',  img: 'https://cdn.sanity.io/images/asz68zwp/production/cabfb148c12e2a514bad241a20d132f881815194-1906x1906.jpg?w=1366&h=1366&auto=format'}
    ])

    return (
        <div>           
            <main>
                {/* Espace des produits */}
                <div id="shop">
                {/* Lisiting des produits grâce à mon state produits */}
                {produits.map((produit) => {
                    return <div>
                        {/* Redirection vers la bonne page en fonction du produit */}
                        <Link to={produit.dir}><img src={produit.img} alt=""></img></Link>
                        <div id='infoProduits'><a href="">{produit.titre}</a> <div id='prixProduits'>{produit.prix}</div></div>
                    </div>
                })}
                </div>
            </main>
        </div>
    )
};
