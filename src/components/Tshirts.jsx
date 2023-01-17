import { Link } from 'react-router-dom';
import { TshirtData } from "./itemData";

export const Tshirts = () => {
   return (
      <div className="item-container">
         <div className="item-title">
            <h1>T-Shirts</h1>
            <p>Graphic tees & much more !</p>
         </div>

         <div className="item-grid-container">
            {TshirtData.map(item => {
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
            <Link to="/tshirts" className="item-btn">T-Shirts</Link>
         </div>
      </div>
   )
}