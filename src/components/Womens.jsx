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
      </div>
      <div className="categories">
        <div className="category-grid-row">
            <CategoryItem src="./img/womens all-ready-to-wear.jpeg" alt="womens-ready-to-wear">
               <h1>All Ready-To-Wear</h1>
            </CategoryItem>
            <CategoryItem src="./img/womensbags.jpeg" alt="womens-bags">
               <h1>Bags</h1>
            </CategoryItem>
        </div>
        <div className="category-grid-row">
            <CategoryItem src="./img/womenaccessories.jpeg" alt="womens-accessories">
               <h1>Accessories</h1>
            </CategoryItem>
            <CategoryItem src="./img/womensshoes.jpeg" alt="womens-shoes">
               <h1>Shoes</h1>
            </CategoryItem>
        </div>
      </div>
    </div>
  );
};
