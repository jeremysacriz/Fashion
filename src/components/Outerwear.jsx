import { Link } from 'react-router-dom';
import { OuterwearData } from "./itemData";

export const Outerwear = () => {
   
   return (
      <div className="item-container">
         <div className="item-title">
            <h1>jackets & Coats</h1>
            <p>We got the Winter fashion on lock.</p>
         </div>

         <div className="item-grid-container">
            {OuterwearData.map(item => {
               return (
                  <Link to={'/sweats-hoodies' + item.path}  className="item-grid-item" key={item.id} state={{ data: item}}>
                     <div className="item-grid-overlay">
                        <div className="item-grid-info">
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

         <div className="item-nav">
            <Link to="/mens" className="item-btn">Mens</Link>
            <span className="forward-slash">/</span>
            <Link to="/ready-to-wear" className="item-btn">Ready-To-Wear</Link>
            <span className="forward-slash">/</span>
            <Link to="/jackets-coats" className="item-btn">Jackets & Coats</Link>
         </div>
      </div>
   )
}