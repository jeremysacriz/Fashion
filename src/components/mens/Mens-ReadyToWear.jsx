import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue, CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../context/context';

export const MensAllReadyToWear = () => {
   const pageReload = () => {
      window.location.reload()
      window.scrollTo(0, 0);
   }

   const { state: { products }} = CartState()
   const newData = products.filter(item => item.gender === "mens" && item.categories === "READY-TO-WEAR")
   
   const [active, setActive] = useState(false)
   const [product, setProduct] = useState({
      products: newData,
      category: 'All-Ready-To-Wear'
   })

   const toggleActive = () => {
      setActive(!active)
   }

   // Reusable Function: Filters data based on category
   const filterProduct = (product) => {
      return newData.filter(item => item.category === product)
   }

   const filterAll = () => {
      setProduct({products: newData, category: 'All-Ready-To-Wear'})
      setActive()
   }
   
   const filterShirts = () => {
      setProduct({products: filterProduct("T-Shirts"), category: 'T-Shirts'})
      setActive()
   }

   const filterHoodies = () => {
      setProduct({products: filterProduct("Sweatshirts & Hoodies"), category: 'Sweatshirts & Hoodies'})
      setActive()
   }

   const filterJackets = () => {
      setProduct({products: filterProduct("Jackets & Coats"), category: 'Jackets & Coats'})
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
            title="Mens All Ready To Wear"
            product={product}
         />
         <CatalogueFilter
            active={active}
            toggleActive={toggleActive}
            box={box}
            product={product}
            category="All-Ready-To-Wear"
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
            link2="/mens/all-ready-to-wear"
            pageReload={pageReload}
            category="All-Ready-To-Wear"
         />
      </div>
   )
}

export const Tshirts = () => {
   const { state: { products }} = CartState()
   const TshirtData = products.filter(item => item.gender === "mens" && item.category === "T-Shirts")

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
   const { state: { products }} = CartState()
   const HoodieData = products.filter(item => item.gender === "mens" && item.category === "Sweatshirts & Hoodies")

   return (
      <Catalogue 
         title="Sweatshirts & Hoodies"
         description="Keeping you warm for the Winter season !"
         data={
            HoodieData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/mens/ready-to-wear/sweatshirts-hoodies' + item.path} />
               )
            })
         }
         link1="/mens"
         link2="/mens/all-ready-to-wear"
         link3="/mens/ready-to-wear/sweatshirts-hoodies"
         gender="Mens"
         category="Ready-To-Wear"
         products="Sweatshirts & Hoodies"
      />
   )
}

export const JacketsCoats = () => {
   const { state: { products }} = CartState()
   const OuterwearData = products.filter(item => item.gender === "mens" && item.category === "Jackets & Coats")

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