import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from "../ProductItem";
import { TshirtData, HoodieData, OuterwearData } from "./mensData";

export const MensAllReadyToWear = () => {
   const newData = TshirtData.concat(HoodieData, OuterwearData)
   const [data, setData] = useState(newData)
   
   const filterCategory = () => {
      // T-Shirts
      // Sweatshirts & Hoodies
      // Jackets & Coats
      const filterByCategory = data.filter(item => item.category === "T-Shirts")
      setData(filterByCategory)
   }

   return (
   <div className="item-container"> 
      <div className="item-title">
         <h1>Mens All-Ready-To-Wear</h1>
         <p>Insert Description Here.</p>
         <button onClick={filterCategory}>Testing</button>
      </div>
      <div className="item-grid-container">
         {
            data.map(item => {
               return (
                  <ProductItem 
                  item={item} 
                  key={item.id} 
                  to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} />
               )
            })
         }
      </div>

      <div className="item-nav">
         <Link to="/mens" className="item-btn">Mens</Link>
         <span className="forward-slash">/</span>
         <Link to="/mens/all-ready-to-wear" className="item-btn">Ready-To-Wear</Link>
      </div>
   </div>
   )
}