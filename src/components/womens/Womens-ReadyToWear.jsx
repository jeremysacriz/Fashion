import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue } from '../Catalogue';
import { CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { WomensTshirtsData, WomensHoodieData, WomensOuterwearData } from './womensData';

export const WomensAllReadyToWear = () => {
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

   const newData = WomensTshirtsData.concat(WomensHoodieData, WomensOuterwearData)
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

   const filterOuterwear = () => {
      const filterByOuterwear = newData.filter(item => item.category === "Outerwear & Blousons")
      setData(filterByOuterwear)
      setCategory("Outerwear & Blousons")
      setActive()
   }

   return (
      <div className="item-container"> 
         <CatalogueTitle 
            title="Womens All Ready To Wear"
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
                  <button className="filter-btn" onClick={filterOuterwear}><h1>Outerwear & Blousons</h1></button>
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
            gender="Womens"
            link1="/womens"
            link2="/womens/all-ready-to-wear"
            pageReload={pageReload}
            category="All-Ready-To-Wear"
         />
      </div>
   )
}


export const WomensTshirts = () => {
   return (
      <Catalogue 
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
      <Catalogue 
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
      <Catalogue 
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