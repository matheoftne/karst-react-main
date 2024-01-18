import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/users/Login';
import Panier from './components/users/Panier';
import Navbar from './components/Navbar/navbar';
import PraxisMethod from './products/PraxisMethod';
import SoftcoverNotebook from './products/SoftcoverNotebook';
import KarstXMUDS1 from './products/KarstXMUDS1';
import ArtisteBundle from './products/ArtisteBundle';
import WoodlessArtistPencils from './products/WoodlessArtistPencils';
import WoodlessPencils from './products/WoodlessPencils';
import HardcoverNotebook from './products/HardcoverNotebook';
import KarstXMUDS2 from './products/KarstXMUDS2';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    // Navigation de toutes les pages
    <div className='App'>   
      <Navbar/>  
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Panier />}/>
        <Route path='/products/praxismethod' element={<PraxisMethod />}/>
        <Route path='/products/softcovernotebook' element={<SoftcoverNotebook />}/>
        <Route path='/products/karstxmuds1' element={<KarstXMUDS1 />}/>
        <Route path='/products/artistebundle' element={<ArtisteBundle />}/>
        <Route path='/products/woodlessartistpencils' element={<WoodlessArtistPencils />}/>
        <Route path='/products/woodlesspencils' element={<WoodlessPencils />}/>
        <Route path='/products/hardcovernotebook' element={<HardcoverNotebook />}/>
        <Route path='/products/karstxmuds2' element={<KarstXMUDS2 />}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}


