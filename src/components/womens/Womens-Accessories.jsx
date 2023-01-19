import { ProductItem } from "../ProductItem";
import { WomensProducts } from './WomensProducts';
import { WomensJewelryData, WomensBeltsData, WomensSunglassesData } from './womensData';

export const WomensJewelry = () => {
   return (
      <WomensProducts 
         title="Jewelry"
         description="Insert Description here."
         data={
            WomensJewelryData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/accessories/jewelry' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-accessories"
         link3="/womens/accessories/jewelry"
         gender="Womens"
         category="Accessories"
         products="Jewelry"
      />
   )
}

export const WomensBelts = () => {
   return (
      <WomensProducts 
         title="Belts"
         description="Insert Description here."
         data={
            WomensBeltsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/accessories/belts' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-accessories"
         link3="/womens/accessories/belts"
         gender="Womens"
         category="Accessories"
         products="Belts"
      />
   )
}

export const WomensSunglasses = () => {
   return (
      <WomensProducts 
         title="Sunglasses"
         description="Insert Description here."
         data={
            WomensSunglassesData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/accessories/sunglasses' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-accessories"
         link3="/womens/accessories/sunglasses"
         gender="Womens"
         category="Accessories"
         products="Sunglasses"
      />
   )
}