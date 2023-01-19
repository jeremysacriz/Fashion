import { ProductItem } from "../ProductItem";
import { WomensProducts } from './WomensProducts';
import { WomensTshirtsData, WomensHoodieData, WomensOuterwearData } from './womensData';

export const WomensTshirts = () => {
   return (
      <WomensProducts 
         title="T-Shirts"
         description="Insert Description here."
         data={
            WomensTshirtsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/ready-to-wear/t-shirts' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-ready-to-wear"
         link3="/womens/ready-to-wear/t-shirts"
         gender="Womens"
         category="Ready-To-Wear"
         products="T-Shirts"
      />
   )
}

export const WomensSweatsHoodies = () => {
   return (
      <WomensProducts 
         title="Sweatshirts & Hoodies"
         description="Insert Description here."
         data={
            WomensHoodieData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/ready-to-wear/sweats-hoodies' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-ready-to-wear"
         link3="/womens/ready-to-wear/sweats-hoodies"
         gender="Womens"
         category="Ready-To-Wear"
         products="Sweatshirts & Hoodies"
      />
   )
}

export const WomensOuterwearBlousons = () => {
   return (
      <WomensProducts 
         title="Outerwear & Blousons"
         description="Insert Description here."
         data={
            WomensOuterwearData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/ready-to-wear/outerwear-blousons' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-ready-to-wear"
         link3="/womens/ready-to-wear/outerwear-blousons"
         gender="Womens"
         category="Ready-To-Wear"
         products="Outerwear & Blousons"
      />
   )
}