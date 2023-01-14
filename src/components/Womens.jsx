import { useEffect } from "react";
import { CategoryItem } from "./index";

export const Womens = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="category-container">
         <div className="category-title">
            <h1>Womens</h1>
            <p>Enhancing Your Inner Beauty</p>
         </div>
         <div className="categories">
            <div className="category-flex-row">
               <CategoryItem
               to="/womens-all-ready-to-wear"
               src="./img/womens all-ready-to-wear.jpeg"
               alt="womens-ready-to-wear">
               <h1>All Ready-To-Wear</h1>
               </CategoryItem>
               <CategoryItem 
                  to="/womens-bags"
                  src="./img/womensbags.jpeg" 
                  alt="womens-bags">
               <h1>Bags</h1>
               </CategoryItem>
            </div>
            <div className="category-flex-row">
               <CategoryItem
               to="/womens-accessories"
               src="./img/womenaccessories.jpeg"
               alt="womens-accessories"
               >
               <h1>Accessories</h1>
               </CategoryItem>
               <CategoryItem 
                  to="/womens-shoes"
                  src="./img/womensshoes.jpeg" 
                  alt="womens-shoes">
               <h1>Shoes</h1>
               </CategoryItem>
            </div>
         </div>
    </div>
  );
};
