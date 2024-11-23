import React from 'react';
import { Link } from 'react-router-dom';

export const ProductItem = ({item, to, gender}) => {
   return (
      <Link to={to} className="item-grid-item" state={item}>
         <div className="item-grid-overlay">
            <div className="item-grid-info">
               {gender && <p className="item-gender">{gender}</p>}
               <h1>{item.title}</h1>
               <p>$ {item.price}</p>
            </div>
         </div>
         <img src={item.src} alt={item.desc}/>
         <div className="product-view">View Product</div>
      </Link>
   )
}
