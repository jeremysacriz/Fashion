import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue } from '../Catalogue';
import { CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { WomensJewelryData, WomensBeltsData, WomensSunglassesData } from './womensData';

export const WomensAllAccessories = () => {
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

   const newData = WomensJewelryData.concat(WomensBeltsData, WomensSunglassesData)
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

   const filterBelts = () => {
      const filterByBelts = newData.filter(item => item.category === "Belts")
      setData(filterByBelts)
      setCategory("Heels")
      setActive()
   }

   const filterSunglasses = () => {
      const filterBySunglasses = newData.filter(item => item.category === "Sunglasses")
      setData(filterBySunglasses)
      setCategory("Sunglasses")
      setActive()
   }

   return (
      <div className="item-container"> 
         <CatalogueTitle 
            title="Womens All Accessories"
            data={data}
            category={category}
         />
         <CatalogueFilter
            active={active}
            toggleActive={toggleActive}
            box={box}
            category={category}
            setCategory="All-Accessories"
            filterAll={filterAll}
            button={
               <>
                  <button className="filter-btn" onClick={filterJewelry}><h1>Jewelry</h1></button>
                  <button className="filter-btn" onClick={filterBelts}><h1>Belts</h1></button>
                  <button className="filter-btn" onClick={filterSunglasses}><h1>Sunglasses</h1></button>
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
            link2="/womens/all-accessories"
            pageReload={pageReload}
            category="All-Accessories"
         />
      </div>
   )
}

export const WomensJewelry = () => {
   return (
      <Catalogue 
         title="Jewelry"
         description="Insert Description here."
         data={
            WomensJewelryData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/accessories/jewelry' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-accessories"
         link3="/womens/accessories/jewelry"
         gender="Womens"
         category="Accessories"
         products="Jewelry"
      />
   )
}

export const WomensBelts = () => {
   return (
      <Catalogue 
         title="Belts"
         description="Insert Description here."
         data={
            WomensBeltsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/accessories/belts' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-accessories"
         link3="/womens/accessories/belts"
         gender="Womens"
         category="Accessories"
         products="Belts"
      />
   )
}

export const WomensSunglasses = () => {
   return (
      <Catalogue 
         title="Sunglasses"
         description="Insert Description here."
         data={
            WomensSunglassesData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/accessories/sunglasses' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-accessories"
         link3="/womens/accessories/sunglasses"
         gender="Womens"
         category="Accessories"
         products="Sunglasses"
      />
   )
}