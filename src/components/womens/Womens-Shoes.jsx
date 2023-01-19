import { ProductItem } from "../ProductItem";
import { WomensProducts } from './WomensProducts';
import { WomensSneakersData, WomensHeelsData } from './womensData';

export const WomensSneakers = () => {
   return (
      <WomensProducts 
         title="Sneakers"
         description="Insert Description here."
         data={
            WomensSneakersData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/shoes/sneakers' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-shoes"
         link3="/womens/shoes/sneakers"
         gender="Womens"
         category="Shoes"
         products="Sneakers"
      />
   )
}

export const WomensHeels = () => {
   return (
      <WomensProducts 
         title="Heels"
         description="Insert Description here."
         data={
            WomensHeelsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/shoes/heels' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-shoes"
         link3="/womens/shoes/heels"
         gender="Womens"
         category="Shoes"
         products="Heels"
      />
   )
}