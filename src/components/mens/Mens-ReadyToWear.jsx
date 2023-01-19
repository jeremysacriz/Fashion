import { ProductItem } from "../ProductItem";
import { MensProducts } from "./MensProducts";
import { TshirtData, HoodieData, OuterwearData } from "./mensData";

// This maps over an array of img srcs to display in Product.jsx
// let filteredArr = TshirtData.filter(item => item.arr)
// {
//    filteredArr.map(item => (
//       item.arr.map(number => (
//          <li key={number}>{number}</li>
//       ))
//    ))
// }

export const Tshirts = () => {
   return (
      <MensProducts 
         title="T-Shirts"
         description="Graphic tees & much more !"
         data={
            TshirtData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/ready-to-wear/t-shirts' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-ready-to-wear"
         link3="/mens/ready-to-wear/t-shirts"
         gender="Mens"
         category="Ready-To-Wear"
         products="T-Shirts"
      />
   )
}

export const SweatsHoodies = () => {
   return (
      <MensProducts 
         title="Sweatshirts & Hoodies"
         description="Keeping you warm for the Winter season !"
         data={
            HoodieData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/ready-to-wear/sweats-hoodies' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-ready-to-wear"
         link3="/mens/ready-to-wear/sweats-hoodies"
         gender="Mens"
         category="Ready-To-Wear"
         products="Sweatshirts & Hoodies"
      />
   )
}

export const JacketsCoats = () => {
   return (
      <MensProducts 
         title="Jackets & Coats"
         description="We got the Winter fashion on lock."
         data={
            OuterwearData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/ready-to-wear/jackets-coats' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-ready-to-wear"
         link3="/mens/ready-to-wear/jackets-coats"
         gender="Mens"
         category="Ready-To-Wear"
         products="Jackets & Coats"
      />
   )
}