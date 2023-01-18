import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TshirtData } from "./itemData";
import { ProductItem } from "./ProductItem";

export const Tshirts = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="item-container">
         <div className="item-title">
            <h1>T-Shirts</h1>
            <p>Graphic tees & much more !</p>
         </div>

         <div className="item-grid-container">
            {TshirtData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/ready-to-wear/t-shirts' + item.path} />
               )
            })}
         </div>

         <div className="item-nav">
            <Link to="/mens" className="item-btn">Mens</Link>
            <span className="forward-slash">/</span>
            <Link to="/mens/all-ready-to-wear" className="item-btn">Ready-To-Wear</Link>
            <span className="forward-slash">/</span>
            <Link to="/mens/ready-to-wear/t-shirts" className="item-btn" onClick={useEffect}>T-Shirts</Link>
         </div>
      </div>
   )
}