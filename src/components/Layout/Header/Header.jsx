import { useState, useMemo, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MensDropdown, WomensDropdown } from './Dropdown';
import { Cart } from '../Cart/Cart';
import { CartState } from '../../../context/context';

export const Header = () => {
   const { state: { products }} = CartState()
   const navigate = useNavigate()

   const [active, setActive] = useState()
   const [search, setSearch] = useState()

   const inputRef = useRef(null)

   const [cartStatus, setCartStatus] = useState()
   const [query, setQuery] = useState('')

   const searchClose = () => {
      setQuery('')
      setSearch(false)
      document.body.style.overflow = "visible"
   }

   const keys = ['title', 'gender', 'categories', 'category']
   const terms = query.toLowerCase().replace(/[^\w ]/g, '').split(' ')

   // Reusable Functions
   // Maps over filtered Products array, returns a new array of products based on matching keywords
   const searchMap = useCallback((array) => {
      return array
      .map(item => (
         <Link to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} className="search-item" key={item.id} onClick={searchClose} state={item}>{item.title}</Link>
      ))
   }, [])

   // Converts property values to lowercase & removes special characters
   const exampleArr = (property) => {
      return keys.map(key => {
         let filterKey = property[key].toLowerCase().replace(/[^\w ]/g, '')
         if (filterKey.split(' ').length > 1) {
            let splitStr = filterKey.split(' ')
            return splitStr
         }

         return filterKey
      })
   }

   const filterProducts = products
   .filter(item => {
      let flattenValues = exampleArr(item).flat()
      
      return terms.every(term =>
         flattenValues.some(item => item.startsWith(term))
      )
   })
   // console.log(filterProducts)

   const productSearch = useMemo(() => searchMap(filterProducts), [searchMap, filterProducts])

   const keywordProducts = products
   .filter(item => {
      let flattenValues = exampleArr(item).flat()

      return terms.every(term =>
         flattenValues.some(item => item.includes(term))
      )
   })
   // console.log(keywordProducts)

   const keywordSearch = useMemo(() => searchMap(keywordProducts), [searchMap, keywordProducts])

   const handleSearchClick = () => {
      setSearch(true)
      setTimeout(() => {
         inputRef.current.focus()
      }, 1000)
      document.body.style.overflow = "hidden"
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (query !== '' && filterProducts.length !== 0 ) {
         searchClose()
         navigate(`/search-results/${query.toLowerCase()}`, { state: {items: filterProducts, search: query.toLowerCase()}})
      }

      if (query !== '' && filterProducts.length === 0) {
         searchClose()
         navigate(`/search-results/${query.toLowerCase()}`, { state: {items: keywordProducts, search: query.toLowerCase()}})
      }
   }

   return (
      <>
      <header className="header">
         <div className="header-container">
            <nav className="header-left">
               <ul className="header-left-container">
                  <li 
                  className="header-list-item"
                  onMouseEnter={() => setActive("MEN")}
                  onMouseLeave={() => setActive()}
                  >
                     <Link 
                     to='/mens' 
                     className={active === "MEN" ? 'list-btn active' : 'list-btn'}
                     onClick={() => {
                        setActive()
                     }}>
                        MENS
                     </Link>
                     <div className={active === "MEN" || active === "WOMEN" ? "submenu-container active" : "submenu-container"}>
                        {active === "MEN" && <MensDropdown className="submenu" />}
                        {active === "WOMEN" && <WomensDropdown className="submenu" />}
                     </div>
                  </li>
                  <li 
                  className="header-list-item"
                  onMouseEnter={() => setActive("WOMEN")}
                  onMouseLeave={() => setActive()}
                  >
                     <Link 
                     to='/womens' 
                     className={active === "WOMEN" ? 'list-btn active' : 'list-btn'}
                     onClick={() => {
                        setActive()
                     }}>
                        WOMENS
                     </Link>
                     <div className={active === "WOMEN" ? "submenu-container active" : "submenu-container"}>
                        {active === "WOMEN" && <WomensDropdown className="submenu" />}
                     </div>
                  </li>
               </ul>
            </nav>

            <Link to="/">
               <img src="/img/logo.jpg" alt="logo" className="logo" />
            </Link>

            <div className="header-right">
               <ul>
                  <li>
                     <button onClick={handleSearchClick}>
                        <span className="material-symbols-outlined">search</span>
                     </button>
                     <div className={search === true ? 'search-overlay active' : 'search-overlay'}></div>
                     <div className={search === true ? 'search-container active' : 'search-container'}>
                        <div className={search === true ? 'search active' : 'search'}>
                           <div className='search-content'>
                              <div className="search-input-width">
                                 <form className="search-input-container" onSubmit={handleSubmit}>
                                    <input type="text" className="search-input" placeholder="Search..." ref={inputRef} onChange={(e) => setQuery(e.target.value)} value={query} />
                                    <button className="search-btn">
                                       <span className="material-symbols-outlined search-icon">search</span>
                                    </button>
                                 </form>
                                 <span className="material-symbols-outlined close" onClick={searchClose}>close</span>
                              </div>
                              <div className="search-body-container">
                                 <div className="search-body">
                                    {query && productSearch}
                                    {productSearch.length === 0 && keywordSearch}
                                    {productSearch.length === 0 && keywordSearch.length === 0 && <h1 className="no-results">No Results for "{query}" found...</h1>}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li>
                     <button onClick={() => {
                        setCartStatus(true)
                        document.body.style.overflow = "hidden"
                     }}>
                        <span className="material-symbols-outlined">shopping_bag</span>
                     </button>
                     <Cart 
                        cartStatus={cartStatus}
                        setCartStatus={setCartStatus}
                     />
                  </li>
               </ul>
            </div>
         </div>
      </header>
      </>
   )
}