import { useState, useEffect } from 'react';
import { ProductItem } from "../ProductItem";
import { Link, useLocation } from 'react-router-dom';

export const SearchResults = () => {
   const { state } = useLocation()

   let filterCategory = state.items.map((item) => item.category)
   let filterGender = state.items.map((item) => item.gender)

   const removeDuplicates = (arr) => {
      return [...new Set(arr)]
   }

   let newData = state.items

   const [category, setCategory] = useState(false)
   const [gender, setGender] = useState(false)

   const [product, setProduct] = useState({
      products: newData,
      category: '',
      gender: ''
   })

   const toggleCategory = () => {
      setCategory(!category)
      gender === true && setGender(false)
   }

   const toggleGender = () => {
      setGender(!gender)
      category === true && setCategory(false)
   }

   // Function Component: Filters products array by Category & Gender
   const FilterBtn = ({children, active, onClick, filterTitle}) => {
      return (
         <div className={active === true ? "item-filter-btn active" : "item-filter-btn"} onClick={onClick}>
         <h1 className="filter-category">{filterTitle}</h1>
         <span className="material-symbols-outlined filter-more">expand_more</span>
         <div className={active === true ? "filter-dropdown active" : 'filter-dropdown'}>
            {children}
         </div>
      </div>
      )
   }

   useEffect(() => {
      window.scrollTo(0, 0);
      setProduct({products: newData, category: '', gender: ''})
      setCategory(false)
      setGender(false)
   }, [newData])

   if (newData.length === 0) {
      return (
      <div className="notfound-container">
         <span className="material-symbols-outlined">sentiment_dissatisfied</span>
         <h1>No Search Results for "{state.search}"...</h1>
         <Link to="/" className="NotFoundButton">Go Back to Homepage</Link>
      </div>
      )
   }

   return (
      <div className="item-bg">
         <div className="item-container"> 
            <div className="item-title">
               <h1>Search Results:</h1>
               <p>{product.products.length} results for "{(product.category && product.gender) ? product.gender + ' ' + product.category : state.search}"</p>
            </div>
            
            <div className="item-filter">
               <h1 className="item-filter-title">Filter By:</h1>
               <FilterBtn 
                  active={category} 
                  onClick={toggleCategory} 
                  filterTitle={`Category: ${product.category}`} 
               >
                  {(product.gender || product.category) && <button className="filter-btn" onClick={() => setProduct({...product, products: newData, category: '', gender: ''})}><h1>None</h1></button>}
                  {removeDuplicates(filterCategory).map((item, index) => {
                     let newItem = item
                     if (item.includes('-') && product.gender) {
                        return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.category === newItem && item.gender === product.gender.toLowerCase()), category: newItem})}><h1>{newItem}</h1></button>
                     }

                     if (product.gender) {
                        return (
                           <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.category === newItem && item.gender === product.gender.toLowerCase()), category: newItem})}><h1>{newItem}</h1></button>
                        )
                     }

                     return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.category === newItem), category: newItem})}><h1>{newItem}</h1></button>
                  })}
               </FilterBtn>
               <FilterBtn 
                  active={gender} 
                  onClick={toggleGender} 
                  filterTitle={`Gender: ${product.gender}`} 
               >
                  {removeDuplicates(filterGender).map((item, index) => {
                     let newItem = item[0].toUpperCase() + item.slice(1).toLowerCase()
                     
                     if (product.category) {
                        return (
                           <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.gender === newItem.toLowerCase() && item.category === product.category), gender: newItem})}><h1>{newItem}</h1></button>
                        )
                     }

                     return <button key={index} className="filter-btn" onClick={() => setProduct({...product, products: newData.filter((item) => item.gender === newItem.toLowerCase()), gender: newItem})}><h1>{newItem}</h1></button>
                  })}
               </FilterBtn>
            </div>

            <div className="item-grid-container">
               {
                  product.products.map(item => {
                     return (
                        <ProductItem 
                        item={item} 
                        key={item.id} 
                        gender={item.gender}
                        to={'/' + item.gender + '/' + item.category.toLowerCase() + '/' + item.linkcategory + item.path} />
                     )
                  })
               }
            </div>
         </div>
      </div>
   )
}