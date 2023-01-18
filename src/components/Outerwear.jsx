import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OuterwearData } from "./itemData";
import { ProductItem } from "./ProductItem";

export const Outerwear = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   
   return (
      <div className="item-container">
         <div className="item-title">
            <h1>jackets & Coats</h1>
            <p>We got the Winter fashion on lock.</p>
         </div>

         <div className="item-grid-container">
            {OuterwearData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/ready-to-wear/jackets-coats' + item.path} />
               )
            })}
         </div>

         <div className="item-nav">
            <Link to="/mens" className="item-btn">Mens</Link>
            <span className="forward-slash">/</span>
            <Link to="/mens/all-ready-to-wear" className="item-btn">Ready-To-Wear</Link>
            <span className="forward-slash">/</span>
            <Link to="/mens/ready-to-wear/jackets-coats" className="item-btn" onClick={useEffect}>Jackets & Coats</Link>
         </div>
      </div>
   )
}