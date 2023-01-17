import { useEffect } from "react";
import { CategoryItem } from "./index";

export const Mens = () => {
useEffect(() => {
window.scrollTo(0, 0);
}, []);

   return (
      <div className="category-container">
         <div className="category-title">
            <h1>Mens</h1>
            <p>The Ultimate Men's Apparel</p>
         </div>
         <div className="categories">
            <div className="category-flex-row">
               <CategoryItem
                  to="/mens-all-ready-to-wear"
                  src="img/all ready-to-wear.jpeg"
                  alt="category-ready-to-wear">
               <h1>All Ready-To-Wear</h1>
               </CategoryItem>
               <CategoryItem 
                  to="/mens-bags" 
                  src="img/bags.jpg" 
                  alt="category-bags">
               <h1>Bags</h1>
               </CategoryItem>
            </div>
            <div className="category-flex-row">
               <CategoryItem
                  to="/mens-accessories"
                  src="img/accessories.png"
                  alt="category-accessories">
               <h1>Accessories</h1>
               </CategoryItem>
               <CategoryItem 
                  to="/mens-shoes" 
                  src="img/shoes.jpg" 
                  alt="category-shoes">
               <h1>Shoes</h1>
               </CategoryItem>
            </div>
      </div>
      </div>
   );
};
