import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Product = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   const location = useLocation()
   const data = location.state.data

   return (
      <div className="product-container">
         <div className="product-flex-container">
            <div className="product-image">
               <img src={data.src} alt="testing" />
               <div className="product-image-buttons">
                  <span className="material-symbols-outlined product-arrow-left">chevron_left</span>
                  <span className="material-symbols-outlined product-arrow-right">chevron_right</span>
               </div>
            </div>
            <div className="product-info-container">
               <div className="product-info">
                  <h1 className="product-title">{data.title}</h1>
                  <h2 className="product-price">{data.price}</h2>

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
