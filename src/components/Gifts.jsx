import { useEffect } from "react";
import { CategoryItem } from "./index";

export const Gifts = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="category-container">
         <div className="category-title">
            <h1>Gifts</h1>
         </div>
         <div className="categories">
            <div className="category-flex-row">
               <CategoryItem src="./img/forhim.png" alt="category-ready-to-wear">
               <h1>For Him</h1>
               </CategoryItem>
               <CategoryItem src="./img/forher.jpeg" alt="category-bags">
               <h1>For Her</h1>
               </CategoryItem>
            </div>
         </div>
      </div>
   );
};
