import React from 'react';
import './css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';

const App = () => {
   return (
         <section id="index">
            <BrowserRouter>
               <Header />
               <div className="index-container">
                  
               </div>
               <Routes>
                  <Route></Route>
               </Routes>
            </BrowserRouter>
         </section>
   )
}

export default App;
