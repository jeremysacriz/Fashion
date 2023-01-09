import React from 'react';
import './css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from './components';

const App = () => {
   return (
         <section id="index">
            <BrowserRouter>
               <Header />
               <Main />
               <Footer />
               <Routes>
                  <Route></Route>
               </Routes>
            </BrowserRouter>
         </section>
   )
}

export default App;
