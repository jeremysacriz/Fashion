import { Link } from "react-router-dom";

export const CategoryItem = (props) => {
   return (
      <Link to={props.to} className="category-flex-item">
         <div className="category-flex-overlay">
            {props.children}
            <p>Shop Now</p>
         </div>
         <img src={props.src} alt={props.alt} />
      </Link>
   );
};