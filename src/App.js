import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/index.css';
import { Header, Main, Footer, Mens, Womens, Gifts, Hoodies, Product } from './components';

const App = () => {
   return (
      <section id="index">
         <Header />

         <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/mens" element={<Mens />}></Route>
            <Route path="/womens" element={<Womens />}></Route>
            <Route path="/gifts" element={<Gifts />}></Route>
            <Route path="/sweats-hoodies" element={<Hoodies />}></Route>
            <Route path="/tommy-hilfiger-hoodie" element={<Product />}></Route>
         </Routes>
         
         <Footer />
      </section>
   )
}

export default App;
