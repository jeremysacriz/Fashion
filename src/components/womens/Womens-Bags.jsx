import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue } from '../Catalogue';
import { CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../context/context';

export const WomensAllBags = () => {
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

   const { state: {products}} = CartState()
   const newData = products.filter(item => item.gender === "womens" && item.categories === "BAGS")

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
   
   const filterShoulder = () => {
      const filterByShoulder = newData.filter(item => item.category === "Shoulder Bags")
      setData(filterByShoulder)
      setCategory("Shoulder Bags")
      setActive()
   }

   const filterMicro = () => {
      const filterByMicro = newData.filter(item => item.category === "Micro Bags")
      setData(filterByMicro)
      setCategory("Micro Bags")
      setActive()
   }

   return (
      <div className="item-container"> 
         <CatalogueTitle 
            title="Womens All Bags"
            data={data}
            category={category}
         />
         <CatalogueFilter
            active={active}
            toggleActive={toggleActive}
            box={box}
            category={category}
            setCategory="All-Bags"
            filterAll={filterAll}
            button={
               <>
                  <button className="filter-btn" onClick={filterShoulder}><h1>Shoulder Bags</h1></button>
                  <button className="filter-btn" onClick={filterMicro}><h1>Micro Bags</h1></button>
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
            link2="/womens/all-bags"
            pageReload={pageReload}
            category="All-Bags"
         />
      </div>
   )
}

export const WomensShoulderBags = () => {
   const { state: {products}} = CartState()
   const WomensShoulderBagsData = products.filter(item => item.gender === "womens" && item.category === "Shoulder Bags")

   return (
      <Catalogue 
         title="Shoulder Bags"
         description="Insert Description here."
         data={
            WomensShoulderBagsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/bags/shoulder-bags' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-bags"
         link3="/womens/bags/shoulder-bags"
         gender="Womens"
         category="Bags"
         products="Shoulder Bags"
      />
   )
}

export const WomensMicroBags = () => {
   const { state: {products}} = CartState()
   const WomensMicroBagsData = products.filter(item => item.gender === "womens" && item.category === "Micro Bags")

   return (
      <Catalogue 
         title="Micro Bags"
         description="Insert Description here."
         data={
            WomensMicroBagsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/bags/micro-bags' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-bags"
         link3="/womens/bags/micro-bags"
         gender="Womens"
         category="Bags"
         products="Micro Bags"
      />
   )
}