import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue, CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../context/context';

export const MensAllAccessories = () => {
   const pageReload = () => {
      window.location.reload()
      window.scrollTo(0, 0);
   }

   const { state: { products }} = CartState()
   const newData = products.filter(item => item.gender === "mens" && item.categories === "ACCESSORIES")

   const [active, setActive] = useState(false)
   const [product, setProduct] = useState({
      products: newData,
      category: 'All-Accessories'
   })

   const toggleActive = () => {
      setActive(!active)
   }

   // Reusable Function: Filters data based on category
   const filterProduct = (product) => {
      return newData.filter(item => item.category === product)
   }

   const filterAll = () => {
      setProduct({products: newData, category: 'All-Accessories'})
      setActive()
   }
   
   const filterJewelry = () => {
      setProduct({products: filterProduct("Jewelry"), category: 'Jewelry'})
      setActive()
   }

   const filterSunglasses = () => {
      setProduct({products: filterProduct("Sunglasses"), category: 'Sunglasses'})
      setActive()
   }

   const filterBelts = () => {
      setProduct({products: filterProduct("Belts"), category: 'Belts'})
      setActive()
   }

   const useOutsideAlerter = (ref) => {
      useEffect(() => {
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

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   return (
      <div className="item-container"> 
         <CatalogueTitle 
            title="Mens All Accessories"
            product={product}
         />
         <CatalogueFilter
            active={active}
            toggleActive={toggleActive}
            box={box}
            product={product}
            category="All-Accessories"
            filterAll={filterAll}
            button={
               <>
                  <button className="filter-btn" onClick={filterJewelry}><h1>Jewelry</h1></button>
                  <button className="filter-btn" onClick={filterSunglasses}><h1>Sunglasses</h1></button>
                  <button className="filter-btn" onClick={filterBelts}><h1>Belts</h1></button>
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
            link2="/mens/all-accessories"
            pageReload={pageReload}
            category="All-Accessories"
         />
      </div>
   )
}

export const Jewelry = () => {
   const { state: { products }} = CartState()
   const JewelryData = products.filter(item => item.gender === "mens" && item.category === "Jewelry")

   return (
      <Catalogue 
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
   const { state: { products }} = CartState()
   const SunglassesData = products.filter(item => item.gender === "mens" && item.category === "Sunglasses")

   return (
      <Catalogue 
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
   const { state: { products }} = CartState()
   const BeltsData = products.filter(item => item.gender === "mens" && item.category === "Belts")

   return (
      <Catalogue 
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