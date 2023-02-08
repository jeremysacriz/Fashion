import { useEffect } from 'react';
import { ProductItem } from "./ProductItem";
import { useLocation } from 'react-router-dom';

export const SearchResults = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   const { state } = useLocation()

   return (
      <div className="item-container"> 
         <div className="item-title">
            <h1>Search Results:</h1>
            <p>{state.items.length} results for "{state.search}"</p>
         </div>
         <div className="item-grid-container">
            {
               state.items.map(item => {
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