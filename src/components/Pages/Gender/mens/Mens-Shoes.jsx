import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue, CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../../../context/context';

export const MensAllShoes = () => {
   const pageReload = () => {
      window.location.reload()
      window.scrollTo(0, 0);
   }

   const { state: { products }} = CartState()
   const newData = products.filter(item => item.gender === "mens" && item.categories === "SHOES")

   const [active, setActive] = useState(false)
   const [product, setProduct] = useState({
      products: newData,
      category: 'All-Shoes'
   })

   const toggleActive = () => {
      setActive(!active)
   }

   // Reusable Function: Filters data based on category
   const filterProduct = (product) => {
      return newData.filter(item => item.category === product)
   }
   
   const filterAll = () => {
      setProduct({products: newData, category: 'All-Shoes'})
      setActive()
   }
   
   const filterSneakers = () => {
      setProduct({products: filterProduct("Sneakers"), category: 'Sneakers'})
      setActive()
   }

   const filterSlides = () => {
      setProduct({products: filterProduct("Slides & Sandals"), category: 'Slides & Sandals'})
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
               title="Mens All Shoes"
               product={product}
            />
            <CatalogueFilter
               active={active}
               toggleActive={toggleActive}
               box={box}
               product={product}
               category="All-Shoes"
               filterAll={filterAll}
               button={
                  <>
                     <button className="filter-btn" onClick={filterSneakers}><h1>Sneakers</h1></button>
                     <button className="filter-btn" onClick={filterSlides}><h1>Slides & Sandals</h1></button>
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
               link2="/mens/all-shoes"
               pageReload={pageReload}
               category="All-Shoes"
            />
         </div>
      </div>
   )
}

export const Sneakers = () => {
   const { state: { products }} = CartState()
   const SneakersData = products.filter(item => item.gender === "mens" && item.category === "Sneakers")

   return (
      <Catalogue 
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
   const { state: { products }} = CartState()
   const SlidesSandalsData = products.filter(item => item.gender === "mens" && item.category === "Slides & Sandals")

   return (
      <Catalogue 
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