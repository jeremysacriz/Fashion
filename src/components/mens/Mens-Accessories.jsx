import { ProductItem } from "../ProductItem";
import { MensProducts } from "./MensProducts";
import { JewelryData } from "./mensData";
import { SunglassesData } from "./mensData";
import { BeltsData } from "./mensData";

export const Jewelry = () => {
   return (
      <MensProducts 
         title="Jewelry"
         description="Insert Description here."
         data={
            JewelryData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/accessories/jewelry' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-accessories"
         link3="/mens/accessories/jewelry"
         gender="Mens"
         category="Accessories"
         products="Jewelry"
      />
   )
}

export const Sunglasses = () => {
   return (
      <MensProducts 
         title="Sunglasses"
         description="Insert Description here."
         data={
            SunglassesData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/accessories/sunglasses' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-accessories"
         link3="/mens/accessories/sunglasses"
         gender="Mens"
         category="Accessories"
         products="Sunglasses"
      />
   )
}

export const Belts = () => {
   return (
      <MensProducts 
         title="Belts"
         description="Insert Description here."
         data={
            BeltsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/accessories/belts' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-accessories"
         link3="/mens/accessories/belts"
         gender="Mens"
         category="Accessories"
         products="Belts"
      />
   )
}