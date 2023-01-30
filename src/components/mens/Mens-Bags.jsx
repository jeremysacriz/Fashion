import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue } from "../Catalogue";
import { CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../context/context';

export const MensAllBags = () => {
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

   const { state: { products }} = CartState()
   const newData = products.filter(item => item.gender === "mens" && item.categories === "BAGS")

   const [active, setActive] = useState(false)
   const [product, setProduct] = useState({
      products: newData,
      category: 'All-Bags'
   })

   const toggleActive = () => {
      setActive(!active)
   }

   const filterAll = () => {
      setProduct({products: newData, category: 'All-Bags'})
      setActive()
   }
   
   const filterCrossBody = () => {
      const filterByCrossBody = newData.filter(item => item.category === "Cross-Body Bags")
      setProduct({products: filterByCrossBody, category: 'Cross-Body Bags'})
      setActive()
   }

   const filterBackpacks = () => {
      const filterByBackpacks = newData.filter(item => item.category === "Backpacks")
      setProduct({products: filterByBackpacks, category: 'Backpacks'})
      setActive()
   }

   return (
      <div className="item-container"> 
         <CatalogueTitle 
            title="Mens All Bags"
            product={product}
         />
         <CatalogueFilter
            active={active}
            toggleActive={toggleActive}
            box={box}
            product={product}
            category="All-Bags"
            filterAll={filterAll}
            button={
               <>
                  <button className="filter-btn" onClick={filterCrossBody}><h1>Cross-Body Bags</h1></button>
                  <button className="filter-btn" onClick={filterBackpacks}><h1>Backpacks</h1></button>
               </>
            }
         />
         <CatalogueGridData 
            gridData={
               product.products.map(item => {
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
            link2="/mens/all-bags"
            pageReload={pageReload}
            category="All-bags"
         />
      </div>
   )
}

export const CrossBodyBags = () => {
   const { state: { products }} = CartState()
   const CrossBodyBagsData = products.filter(item => item.gender === "mens" && item.category === "Cross-Body Bags")

   return (
      <Catalogue 
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
   const { state: { products }} = CartState()
   const BackpacksData = products.filter(item => item.gender === "mens" && item.category === "Backpacks")

   return (
      <Catalogue 
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