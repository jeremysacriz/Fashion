import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Catalogue = ({title, description, data, link1, link2, link3, gender, category, products}) => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const scrollUp = () => {
      window.scrollTo(0, 0);
   }

   return (
      <div className="item-container"> 
         <div className="item-title">
            <h1>{title}</h1>
            <p>{description}</p>
         </div>

         <div className="item-grid-container">
            {data}
         </div>

         <div className="item-nav">
            <Link to={link1} className="item-btn">{gender}</Link>
            <span className="forward-slash">/</span>
            <Link to={link2} className="item-btn">{category}</Link>
            <span className="forward-slash">/</span>
            <Link to={link3} className="item-btn" onClick={scrollUp}>{products}</Link>
         </div>
      </div>
   )
}