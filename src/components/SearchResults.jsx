import { useState, useEffect, useRef } from 'react';
import { ProductItem } from "./ProductItem";
import { useLocation } from 'react-router-dom';

export const SearchResults = () => {
   const { state } = useLocation()

   let filteredCategory = state.items.map((item) => item.categories)

   const removeDuplicates = (arr) => {
      return arr.filter((item, index) => arr.indexOf(item) === index)
   }

   let newData = state.items

   const [active, setActive] = useState(false)
   const [product, setProduct] = useState({
      products: newData,
      category: ''
   })

   const toggleActive = () => {
      setActive(!active)
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

   useEffect(() => {
      window.scrollTo(0, 0);
      setProduct({products: newData, category: ''})
   }, [newData])

   return (
      <div className="item-container"> 
         <div className="item-title">
            <h1>Search Results:</h1>
            <p>{state.items.length} results for "{state.search}"</p>
         </div>
         
         <div className="item-filter">
            <h1 className="item-filter-title">Filter By:</h1>
            <div className={active === true ? "item-filter-btn active" : "item-filter-btn"} onClick={toggleActive} ref={box}>
               <h1 className="filter-category">Category: {product.category}</h1>
               <span className="material-symbols-outlined filter-more">expand_more</span>
               <div className={active === true ? "filter-dropdown active" : 'filter-dropdown'}>
                  {removeDuplicates(filteredCategory).map((item, index) => {
                     if (item.includes('-')) {
                        let newItem = item.toLowerCase().split('-').map((item) => item[0].toUpperCase() + item.slice(1)).join('-')
                        return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.categories === newItem.toUpperCase()), category: newItem})}><h1>{newItem}</h1></button>
                     }

                     let newItem = item[0].toUpperCase() + item.slice(1).toLowerCase()
                     return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.categories === newItem.toUpperCase()), category: newItem})}><h1>{newItem}</h1></button>
                  })}
               </div>
            </div>
         </div>

         <div className="item-grid-container">
            {
               product.products.map(item => {
                  return (
                     <ProductItem 
                     item={item} 
                     key={item.id} 
                     gender={item.gender}
                     to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} />
                  )
               })
            }
         </div>
      </div>
   )
}