import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/index.css';
import { Header, Main, Footer, Mens } from './components';

const App = () => {
   return (
      <section id="index">
         <Header />
         <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Mens" element={<Mens />}></Route>
         </Routes>
         <Footer />
      </section>
   )
}

export default App;
