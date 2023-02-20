import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue, CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../context/context';

export const WomensAllBags = () => {
   const pageReload = () => {
      window.location.reload()
      window.scrollTo(0, 0);
   }

   const { state: { products }} = CartState()
   const newData = products.filter(item => item.gender === "womens" && item.categories === "BAGS")

   const [active, setActive] = useState(false)
   const [product, setProduct] = useState({
      products: newData,
      category: 'All-Bags'
   })

   const toggleActive = () => {
      setActive(!active)
   }

   // Reusable Function: Filters data based on category
   const filterProduct = (product) => {
      return newData.filter(item => item.category === product)
   }

   const filterAll = () => {
      setProduct({products: newData, category: 'All-Bags'})
      setActive()
   }
   
   const filterShoulder = () => {
      setProduct({products: filterProduct("Shoulder Bags"), category: 'Shoulder Bags'})
      setActive()
   }

   const filterMicro = () => {
      setProduct({products: filterProduct("Micro Bags"), category: 'Micro Bags'})
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
               title="Womens All Bags"
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
                     <button className="filter-btn" onClick={filterShoulder}><h1>Shoulder Bags</h1></button>
                     <button className="filter-btn" onClick={filterMicro}><h1>Micro Bags</h1></button>
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
               link2="/womens/all-bags"
               pageReload={pageReload}
               category="All-Bags"
            />
         </div>
      </div>
   )
}

export const WomensShoulderBags = () => {
   const { state: { products }} = CartState()
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
   const { state: { products }} = CartState()
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