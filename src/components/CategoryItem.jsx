import { Link } from 'react-router-dom';

export const CategoryItem = (props) => {
   return (
       <Link className="category-grid-item">
          <div className="category-grid-overlay">
             {props.children}
             <p>Shop Now</p>
          </div>
          <img src={props.src} alt={props.alt} />
       </Link>
   )
}