import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HoodieData } from "./itemData";
import { ProductItem } from "./ProductItem";

export const Hoodies = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="item-container">
         <div className="item-title">
            <h1>Sweatshirts & Hoodies</h1>
            <p>Keeping you warm for the Winter season !</p>
         </div>

         <div className="item-grid-container">
            {HoodieData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/ready-to-wear/sweats-hoodies' + item.path} />
               )
            })}
         </div>

         <div className="item-nav">
            <Link to="/mens" className="item-btn">Mens</Link>
            <span className="forward-slash">/</span>
            <Link to="/mens/all-ready-to-wear" className="item-btn">Ready-To-Wear</Link>
            <span className="forward-slash">/</span>
            <Link to="/mens/ready-to-wear/sweats-hoodies" className="item-btn" onClick={useEffect}>Sweatshirts & Hoodies</Link>
         </div>
      </div>
   )
}