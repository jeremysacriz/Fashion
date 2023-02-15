import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "../ProductItem";
import { Catalogue, CatalogueTitle, CatalogueFilter, CatalogueGridData } from "../All-Products";
import { CartState } from '../../context/context';

export const WomensAllShoes = () => {
   const pageReload = () => {
      window.location.reload()
      window.scrollTo(0, 0);
   }

   const { state: { products }} = CartState()
   const newData = products.filter(item => item.gender === "womens" && item.categories === "SHOES")

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

   const filterHeels = () => {
      setProduct({products: filterProduct("Heels"), category: 'Heels'})
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
            title="Womens All Shoes"
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
                  <button className="filter-btn" onClick={filterHeels}><h1>Heels</h1></button>
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
            link2="/womens/all-shoes"
            pageReload={pageReload}
            category="All-Shoes"
         />
      </div>
   )
}

export const WomensSneakers = () => {
   const { state: { products }} = CartState()
   const WomensSneakersData = products.filter(item => item.gender === "womens" && item.category === "Sneakers")

   return (
      <Catalogue 
         title="Sneakers"
         description="Insert Description here."
         data={
            WomensSneakersData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/shoes/sneakers' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-shoes"
         link3="/womens/shoes/sneakers"
         gender="Womens"
         category="Shoes"
         products="Sneakers"
      />
   )
}

export const WomensHeels = () => {
   const { state: { products }} = CartState()
   const WomensHeelsData = products.filter(item => item.gender === "womens" && item.category === "Heels")

   return (
      <Catalogue 
         title="Heels"
         description="Insert Description here."
         data={
            WomensHeelsData.map(item => {
               return (
                  <ProductItem item={item} key={item.id} to={'/womens/shoes/heels' + item.path} />
               )
            })
         }
         link1="/womens"
         link2="/womens/all-shoes"
         link3="/womens/shoes/heels"
         gender="Womens"
         category="Shoes"
         products="Heels"
      />
   )
}