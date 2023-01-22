import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from "../ProductItem";
import { MensProducts } from "./MensProducts";
import { SneakersData, SlidesSandalsData } from "./mensData";

export const MensAllShoes = () => {
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
         <div className="item-title">
            <h1>Mens All Shoes</h1>
            <p>{data.length} results for {category}</p>
         </div>
         <div className="item-filter">
            <h1 className="item-filter-title">Filter By:</h1>
            <div className={active === true ? "item-filter-btn active" : "item-filter-btn"} onClick={toggleActive} ref={box}>
               <h1 className="filter-category">Category: {category}</h1>
               <span className="material-symbols-outlined filter-more">expand_more</span>
               <div className={active === true ? "filter-dropdown active" : 'filter-dropdown'}>
                  <button className={category === "All-Shoes" ? "filter-btn-inactive" : "filter-btn"} onClick={filterAll}><h1>All-Shoes</h1></button>
                  <button className="filter-btn" onClick={filterSneakers}><h1>Sneakers</h1></button>
                  <button className="filter-btn" onClick={filterSlides}><h1>Slides & Sandals</h1></button>
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