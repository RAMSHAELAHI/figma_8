import React from 'react';
import NavBar from '../components/NavBar';
import Shop from '../components/Shop';
import Home from '../components/Home';
import Product from '../components/Product';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function page() {
  return (
   <div> 
    <NavBar />
    <Home/>
    <Shop/>
    <Product/>
    <Contact />
    <Footer/>
   

   </div>
  );
}
