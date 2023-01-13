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
      </div>
      <div className="categories">
        <div className="category-grid-row">
          <CategoryItem
            src="./img/all ready-to-wear.jpeg"
            alt="category-ready-to-wear"
          >
            <h1>All Ready-To-Wear</h1>
          </CategoryItem>
          <CategoryItem src="./img/bags.jpg" alt="category-bags">
            <h1>Bags</h1>
          </CategoryItem>
        </div>
        <div className="category-grid-row">
          <CategoryItem src="./img/accessories.png" alt="category-accessories">
            <h1>Accessories</h1>
          </CategoryItem>
          <CategoryItem src="./img/shoes.jpg" alt="category-shoes">
            <h1>Shoes</h1>
          </CategoryItem>
        </div>
      </div>
    </div>
  );
};
