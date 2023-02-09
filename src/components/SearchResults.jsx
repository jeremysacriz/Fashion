import { useState, useEffect } from 'react';
import { ProductItem } from "./ProductItem";
import { useLocation } from 'react-router-dom';

export const SearchResults = () => {
   const { state } = useLocation()

   let filterCategory = state.items.map((item) => item.categories)
   let filterGender = state.items.map((item) => item.gender)

   const removeDuplicates = (arr) => {
      return arr.filter((item, index) => arr.indexOf(item) === index)
   }

   let newData = state.items

   const [category, setCategory] = useState(false)
   const [gender, setGender] = useState(false)

   const [product, setProduct] = useState({
      products: newData,
      category: '',
      gender: ''
   })

   console.log(product)

   const toggleCategory = () => {
      setCategory(!category)
   }

   const toggleGender = () => {
      setGender(!gender)
   }

   // const useOutsideAlerter = (ref) => {
   //    useEffect(() => {
   //       window.scrollTo(0, 0);
   //       function handleOutsideClick(e) {
   //          if (ref.current && !ref.current.contains(e.target)) {
   //             setCategory(false)
   //             setGender(false)
   //          }
   //       }

   //       document.addEventListener("click", handleOutsideClick)
   //       return () => document.removeEventListener("click", handleOutsideClick)
   //    }, [ref]);
   // }

   // const box = useRef(null)
   // useOutsideAlerter(box)

   useEffect(() => {
      window.scrollTo(0, 0);
      setProduct({products: newData, category: '', gender: ''})
   }, [newData])

   return (
      <div className="item-container"> 
         <div className="item-title">
            <h1>Search Results:</h1>
            <p>{state.items.length} results for "{state.search}"</p>
         </div>
         
         <div className="item-filter">
            <h1 className="item-filter-title">Filter By:</h1>
            <div className={category === true ? "item-filter-btn active" : "item-filter-btn"} onClick={toggleCategory}>
               <h1 className="filter-category">Category: {product.category}</h1>
               <span className="material-symbols-outlined filter-more">expand_more</span>
               <div className={category === true ? "filter-dropdown active" : 'filter-dropdown'}>
                  {(product.gender || product.category) && <button className="filter-btn" onClick={() => setProduct({...product, products: newData, category: '', gender: ''})}><h1>None</h1></button>}
                  {removeDuplicates(filterCategory).map((item, index) => {
                     let newItem = item[0].toUpperCase() + item.slice(1).toLowerCase()

                     if (item.includes('-') && product.gender) {
                        let newItem = item.toLowerCase().split('-').map((item) => item[0].toUpperCase() + item.slice(1)).join('-')
                        return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.categories === newItem.toUpperCase() && item.gender === product.gender.toLowerCase()), category: newItem})}><h1>{newItem}</h1></button>
                     }

                     if (item.includes('-') && product.category) {
                        let newItem = item.toLowerCase().split('-').map((item) => item[0].toUpperCase() + item.slice(1)).join('-')
                        return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.categories === product.category.toUpperCase() && item.gender === product.gender.toLowerCase()), gender: product.gender})}><h1>{newItem}</h1></button>
                     }

                     if (product.gender) {
                        return (
                           <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.categories === newItem.toUpperCase() && item.gender === product.gender.toLowerCase()), category: newItem})}><h1>{newItem}</h1></button>
                        )
                     }

                     return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.categories === newItem.toUpperCase()), category: newItem})}><h1>{newItem}</h1></button>
                  
                  })}
               </div>
            </div>
            <div className={gender === true ? "item-filter-btn active" : "item-filter-btn"} onClick={toggleGender}>
               <h1 className="filter-category">Gender: {product.gender}</h1>
               <span className="material-symbols-outlined filter-more">expand_more</span>
               <div className={gender === true ? "filter-dropdown active" : 'filter-dropdown'}>
                  {removeDuplicates(filterGender).map((item, index) => {
                     let newItem = item[0].toUpperCase() + item.slice(1).toLowerCase()

                     if (product.category) {
                        return (
                           <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.gender === newItem.toLowerCase() && item.categories === product.category.toUpperCase()), gender: newItem})}><h1>{newItem}</h1></button>
                        )
                     }

                     return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.gender === newItem.toLowerCase()), gender: newItem})}><h1>{newItem}</h1></button>
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