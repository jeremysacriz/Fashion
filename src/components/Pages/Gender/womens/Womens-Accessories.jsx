import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue, CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../../../context/context';

export const WomensAllAccessories = () => {
   const pageReload = () => {
      window.location.reload()
      window.scrollTo(0, 0);
   }

   const { state: { products }} = CartState()
   const newData = products.filter(item => item.gender === "womens" && item.categories === "ACCESSORIES")

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

   const filterBelts = () => {
      setProduct({products: filterProduct("Belts"), category: 'Belts'})
      setActive()
   }

   const filterSunglasses = () => {
      setProduct({products: filterProduct("Sunglasses"), category: 'Sunglasses'})
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
               title="Womens All Accessories"
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
                     <button className="filter-btn" onClick={filterBelts}><h1>Belts</h1></button>
                     <button className="filter-btn" onClick={filterSunglasses}><h1>Sunglasses</h1></button>
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
               link2="/womens/all-accessories"
               pageReload={pageReload}
               category="All-Accessories"
            />
         </div>
      </div>
   )
}

export const WomensJewelry = () => {
   const { state: { products }} = CartState()
   const WomensJewelryData = products.filter(item => item.gender === "womens" && item.category === "Jewelry")

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
   const { state: { products }} = CartState()
   const WomensBeltsData = products.filter(item => item.gender === "womens" && item.category === "Belts")

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
   const { state: { products }} = CartState()
   const WomensSunglassesData = products.filter(item => item.gender === "womens" && item.category === "Sunglasses")

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