import { ProductItem } from "../ProductItem";
import { MensProducts } from "./MensProducts";
import { SneakersData } from "./mensData";
import { SlidesSandalsData } from "./mensData";

export const Sneakers = () => {
   return (
      <MensProducts 
         title="Sneakers"
         description="Insert Description here."
         data={
            SneakersData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/shoes/sneakers' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-shoes"
         link3="/mens/shoes/sneakers"
         gender="Mens"
         category="Shoes"
         products="Sneakers"
      />
   )
}

export const SlidesSandals = () => {
   return (
      <MensProducts 
         title="Slides & Sandals"
         description="Insert Description here."
         data={
            SlidesSandalsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/shoes/slides-sandals' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-shoes"
         link3="/mens/shoes/slides-sandals"
         gender="Mens"
         category="Shoes"
         products="Slides & Sandals"
      />
   )
}