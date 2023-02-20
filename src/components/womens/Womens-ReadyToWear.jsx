import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue, CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../context/context';

export const WomensAllReadyToWear = () => {
   const pageReload = () => {
      window.location.reload()
      window.scrollTo(0, 0);
   }

   const { state: { products }} = CartState()
   const newData = products.filter(item => item.gender === "womens" && item.categories === "READY-TO-WEAR")

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

   const filterOuterwear = () => {
      setProduct({products: filterProduct("Outerwear & Blousons"), category: 'Outerwear & Blousons'})
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
      <div className="item-bg">
         <div className="item-container"> 
            <CatalogueTitle 
               title="Womens All Ready To Wear"
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
                     <button className="filter-btn" onClick={filterOuterwear}><h1>Outerwear & Blousons</h1></button>
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
               gender="Womens"
               link1="/womens"
               link2="/womens/all-ready-to-wear"
               pageReload={pageReload}
               category="All-Ready-To-Wear"
            />
         </div>
      </div>
   )
}

export const WomensTshirts = () => {
   const { state: { products }} = CartState()
   const WomensTshirtsData = products.filter(item => item.gender === "womens" && item.category === "T-Shirts")

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
   const { state: { products }} = CartState()
   const WomensHoodieData = products.filter(item => item.gender === "womens" && item.category === "Sweatshirts & Hoodies")

   return (
      <Catalogue 
         title="Sweatshirts & Hoodies"
         description="Insert Description here."
         data={
            WomensHoodieData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/ready-to-wear/sweatshirts-hoodies' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-ready-to-wear"
         link3="/womens/ready-to-wear/sweatshirts-hoodies"
         gender="Womens"
         category="Ready-To-Wear"
         products="Sweatshirts & Hoodies"
      />
   )
}

export const WomensOuterwearBlousons = () => {
   const { state: { products }} = CartState()
   const WomensOuterwearData = products.filter(item => item.gender === "womens" && item.category === "Outerwear & Blousons")

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