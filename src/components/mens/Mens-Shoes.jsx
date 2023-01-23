import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue } from "../Catalogue";
import { CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { SneakersData, SlidesSandalsData } from "./mensData";

export const MensAllShoes = () => {
   const pageReload = () => {
      window.location.reload()
      window.scrollTo(0, 0);
   }

   const useOutsideAlerter = (ref) => {
      useEffect(() => {
         window.scrollTo(0, 0);
         function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
               setActive(false)
            }
         }

         document.addEventListener("click", handleOutsideClick)
         return () => document.removeEventListener("click", handleOutsideClick)
      }, [ref]);
   }

   const box = useRef(null)
   useOutsideAlerter(box)

   const newData = SneakersData.concat(SlidesSandalsData)
   const [data, setData] = useState(newData)
   const [category, setCategory] = useState("All-Shoes")
   const [active, setActive] = useState(false)

   const toggleActive = () => {
      setActive(!active)
   }

   const filterAll = () => {
      setData(newData)
      setCategory("All-Shoes")
      setActive()
   }
   
   const filterSneakers = () => {
      const filterBySneakers = newData.filter(item => item.category === "Sneakers")
      setData(filterBySneakers)
      setCategory("Sneakers")
      setActive()
   }

   const filterSlides = () => {
      const filterBySlides = newData.filter(item => item.category === "Slides & Sandals")
      setData(filterBySlides)
      setCategory("Slides & Sandals")
      setActive()
   }

   return (
      <div className="item-container"> 
         <CatalogueTitle 
            title="Mens All Shoes"
            data={data}
            category={category}
         />
         <CatalogueFilter
            active={active}
            toggleActive={toggleActive}
            box={box}
            category={category}
            setCategory="All-Shoes"
            filterAll={filterAll}
            button={
               <>
                  <button className="filter-btn" onClick={filterSneakers}><h1>Sneakers</h1></button>
                  <button className="filter-btn" onClick={filterSlides}><h1>Slides & Sandals</h1></button>
               </>
            }
         />
         <CatalogueGridData 
            gridData={
               data.map(item => {
                  return (
                     <ProductItem 
                     item={item} 
                     key={item.id} 
                     to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} />
                  )
               })
            }
            gender="Mens"
            link1="/mens"
            link2="/mens/all-shoes"
            pageReload={pageReload}
            category="All-Shoes"
         />
      </div>
   )
}

export const Sneakers = () => {
   return (
      <Catalogue 
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
      <Catalogue 
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