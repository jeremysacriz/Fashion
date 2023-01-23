import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from "../ProductItem";
import { MensProducts } from "./MensProducts";
import { JewelryData, SunglassesData, BeltsData } from "./mensData";

export const MensAllAccessories = () => {
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

   const newData = JewelryData.concat(SunglassesData, BeltsData)
   const [data, setData] = useState(newData)
   const [category, setCategory] = useState("All-Accessories")
   const [active, setActive] = useState(false)

   const toggleActive = () => {
      setActive(!active)
   }

   const filterAll = () => {
      setData(newData)
      setCategory("All-Accessories")
      setActive()
   }
   
   const filterJewelry = () => {
      const filterByJewelry = newData.filter(item => item.category === "Jewelry")
      setData(filterByJewelry)
      setCategory("Jewelry")
      setActive()
   }

   const filterSunglasses = () => {
      const filterBySunglasses = newData.filter(item => item.category === "Sunglasses")
      setData(filterBySunglasses)
      setCategory("Sunglasses")
      setActive()
   }

   const filterBelts = () => {
      const filterByBelts  = newData.filter(item => item.category === "Belts")
      setData(filterByBelts)
      setCategory("Belts")
      setActive()
   }

   return (
      <div className="item-container"> 
         <div className="item-title">
            <h1>Mens All Accessories</h1>
            <p>{data.length} results for {category}</p>
         </div>
         <div className="item-filter">
            <h1 className="item-filter-title">Filter By:</h1>
            <div className={active === true ? "item-filter-btn active" : "item-filter-btn"} onClick={toggleActive} ref={box}>
               <h1 className="filter-category">Category: {category}</h1>
               <span className="material-symbols-outlined filter-more">expand_more</span>
               <div className={active === true ? "filter-dropdown active" : 'filter-dropdown'}>
                  <button className={category === "All-Accessories" ? "filter-btn-inactive" : "filter-btn"} onClick={filterAll}><h1>All-Accessories</h1></button>
                  <button className="filter-btn" onClick={filterJewelry}><h1>Jewelry</h1></button>
                  <button className="filter-btn" onClick={filterSunglasses}><h1>Sunglasses</h1></button>
                  <button className="filter-btn" onClick={filterBelts}><h1>Belts</h1></button>
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
            <Link to="/mens/all-ready-to-wear" className="item-btn" onClick={pageReload}>All-Ready-To-Wear</Link>
         </div>
      </div>
   )
}

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