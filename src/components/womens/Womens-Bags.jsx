import { ProductItem } from "../ProductItem";
import { WomensProducts } from './WomensProducts';
import { WomensShoulderBagsData, WomensMicroBagsData } from './womensData';

export const WomensShoulderBags = () => {
   return (
      <WomensProducts 
         title="Shoulder Bags"
         description="Insert Description here."
         data={
            WomensShoulderBagsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/bags/shoulder-bags' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-bags"
         link3="/womens/bags/shoulder-bags"
         gender="Womens"
         category="Bags"
         products="Shoulder Bags"
      />
   )
}

export const WomensMicroBags = () => {
   return (
      <WomensProducts 
         title="Micro Bags"
         description="Insert Description here."
         data={
            WomensMicroBagsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/bags/micro-bags' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-bags"
         link3="/womens/bags/micro-bags"
         gender="Womens"
         category="Bags"
         products="Micro Bags"
      />
   )
}