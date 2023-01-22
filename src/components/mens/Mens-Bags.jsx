import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from "../ProductItem";
import { MensProducts } from "./MensProducts";
import { CrossBodyBagsData, BackpacksData } from "./mensData";

export const MensAllBags = () => {
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

   const newData = CrossBodyBagsData.concat(BackpacksData)
   const [data, setData] = useState(newData)
   const [category, setCategory] = useState("All-Bags")
   const [active, setActive] = useState(false)

   const toggleActive = () => {
      setActive(!active)
   }

   const filterAll = () => {
      setData(newData)
      setCategory("All-Bags")
      setActive()
   }
   
   const filterCrossBody = () => {
      const filterByCrossBody = newData.filter(item => item.category === "Cross-Body Bags")
      setData(filterByCrossBody)
      setCategory("Cross-Body Bags")
      setActive()
   }

   const filterBackpacks = () => {
      const filterByBackpacks = newData.filter(item => item.category === "Backpacks")
      setData(filterByBackpacks)
      setCategory("Backpacks")
      setActive()
   }

   return (
      <div className="item-container"> 
         <div className="item-title">
            <h1>Mens All Bags</h1>
            <p>{data.length} results for {category}</p>
         </div>
         <div className="item-filter">
            <h1 className="item-filter-title">Filter By:</h1>
            <div className={active === true ? "item-filter-btn active" : "item-filter-btn"} onClick={toggleActive} ref={box}>
               <h1 className="filter-category">Category: {category}</h1>
               <span className="material-symbols-outlined filter-more">expand_more</span>
               <div className={active === true ? "filter-dropdown active" : 'filter-dropdown'}>
                  <button className={category === "All-Bags" ? "filter-btn-inactive" : "filter-btn"} onClick={filterAll}><h1>All-Bags</h1></button>
                  <button className="filter-btn" onClick={filterCrossBody}><h1>Cross-Body-Bags</h1></button>
                  <button className="filter-btn" onClick={filterBackpacks}><h1>Backpacks</h1></button>
               </div>
            </div>
         </div>
         <div className="item-grid-container">
            {
               data.map(item => {
                  return (
                     <ProductItem 
                     item={item} 
                     key={item.id} 
                     to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} />
                  )
               })
            }
         </div>

         <div className="item-nav">
            <Link to="/mens" className="item-btn">Mens</Link>
            <span className="forward-slash">/</span>
            <Link to="/mens/all-ready-to-wear" className="item-btn" onClick={useEffect}>All-Ready-To-Wear</Link>
         </div>
      </div>
   )
}

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