import React from 'react';
import { Link } from 'react-router-dom';
import { HoodieData } from "./HoodieData";

export const Hoodies = () => {
   return (
      <div className="hoodies-container">
         <div className="hoodies-title">
            <h1>Sweatshirts & Hoodies</h1>
         </div>

         <div className="hoodies-grid-container">
            {HoodieData.map(item => {
               return (
                  <Link to="/mens" className="grid-item" key={item.id}>
                     <div className="grid-overlay">
                        <div className="grid-info">
                           <h1>{item.title}</h1>
                           <p>{item.price}</p>
                        </div>
                     </div>
                     <img src={item.src} alt={item.desc}/>
                     <div className="product-view">View Product</div>
                  </Link>
               )
            })}
         </div>

         <div className="hoodies-nav">
            <Link to="/mens" className="hoodies-btn">Mens</Link>
            <span className="forward-slash">/</span>
            <Link to="/ready-to-wear" className="hoodies-btn">Ready-To-Wear</Link>
            <span className="forward-slash">/</span>
            <Link to="/sweats-hoodies" className="hoodies-btn">Sweatshirts & Hoodies</Link>
         </div>
      </div>
   )
}
