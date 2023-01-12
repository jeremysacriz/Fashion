import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { HoodieData } from "./HoodieData";

export const Product = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className="product-container">
         <div className="product-flex-container">
            <div className="product-image">
               <img src="./img/Tommy Hilfiger Hoodie.jpeg" alt="testing"/>
            </div>
            <div className="product-info-container">
               <div className="product-info">
                  <h1 className="product-title">Tommy Hilfiger Hoodie Camo</h1>
                  <h2 className="product-price">$ AUD</h2>

                  <div className="product-sizes">
                     <button>XS</button>
                     <button>S</button>
                     <button>M</button>
                     <button>L</button>
                     <button>XL</button>
                  </div>
                  <button className="product-bag"><h1>Add to Bag</h1></button>
               </div>
            </div>
         </div>

         <div className="product-nav">
            <Link to="/mens" className="product-btn">Mens</Link>
            <span className="forward-slash">/</span>
            <Link to="/ready-to-wear" className="product-btn">Ready-To-Wear</Link>
            <span className="forward-slash">/</span>
            <Link to="/sweats-hoodies" className="product-btn">Sweatshirts & Hoodies</Link>
         </div>

      </div>
   )
}
