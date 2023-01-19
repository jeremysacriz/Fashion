import { ProductItem } from "../ProductItem";
import { MensProducts } from "./MensProducts";
import { CrossBodyBagsData, BackpacksData } from "./mensData";

export const CrossBodyBags = () => {
   return (
      <MensProducts 
         title="Cross-Body Bags"
         description="Insert Description here."
         data={
            CrossBodyBagsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/bags/cross-body-bags' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-bags"
         link3="/mens/bags/cross-body-bags"
         gender="Mens"
         category="Bags"
         products="Cross-Body Bags"
      />
   )
}

export const Backpacks = () => {
   return (
      <MensProducts 
         title="Backpacks"
         description="Insert Description here."
         data={
            BackpacksData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/bags/backpacks' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-bags"
         link3="/mens/bags/backpacks"
         gender="Mens"
         category="Bags"
         products="Backpacks"
      />
   )
}