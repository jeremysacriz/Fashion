import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue } from "../Catalogue";
import { CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { TshirtData, HoodieData, OuterwearData } from "./mensData";

export const MensAllReadyToWear = () => {
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

   const newData = TshirtData.concat(HoodieData, OuterwearData)
   const [data, setData] = useState(newData)
   const [category, setCategory] = useState("All-Ready-To-Wear")
   const [active, setActive] = useState(false)

   const toggleActive = () => {
      setActive(!active)
   }

   const filterAll = () => {
      setData(newData)
      setCategory("All-Ready-To-Wear")
      setActive()
   }
   
   const filterShirts = () => {
      const filterByShirts = newData.filter(item => item.category === "T-Shirts")
      setCategory("T-Shirts")
      setData(filterByShirts)
      setActive()
   }

   const filterHoodies = () => {
      const filterByHoodies = newData.filter(item => item.category === "Sweatshirts & Hoodies")
      setData(filterByHoodies)
      setCategory("Sweatshirts & Hoodies")
      setActive()
   }

   const filterJackets = () => {
      const filterByJackets= newData.filter(item => item.category === "Jackets & Coats")
      setData(filterByJackets)
      setCategory("Jackets & Coats")
      setActive()
   }

   return (
      <div className="item-container"> 
         <CatalogueTitle 
            title="Mens All Ready To Wear"
            data={data}
            category={category}
         />
         <CatalogueFilter
            active={active}
            toggleActive={toggleActive}
            box={box}
            category={category}
            setCategory="All-Ready-To-Wear"
            filterAll={filterAll}
            button={
               <>
                  <button className="filter-btn" onClick={filterShirts}><h1>T-Shirts</h1></button>
                  <button className="filter-btn" onClick={filterHoodies}><h1>Sweatshirts & Hoodies</h1></button>
                  <button className="filter-btn" onClick={filterJackets}><h1>Jackets & Coats</h1></button>
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
            link2="/mens/all-ready-to-wear"
            pageReload={pageReload}
            category="All-Ready-To-Wear"
         />
      </div>
   )
}

export const Tshirts = () => {
   return (
      <Catalogue 
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
      <Catalogue 
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
      <Catalogue 
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