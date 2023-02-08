import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MensDropdown, WomensDropdown } from '../index';
import { Cart } from '../index';
import { CartState } from '../../context/context'

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

   const productSearch = products
      .filter(
         (item) => 
         keys.some(key => item[key].toLowerCase().startsWith(query.toLowerCase()))
      )
      .map(item => (
         <Link to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} className="search-item" key={item.id} onClick={searchClose} state={item}>{item.title}</Link>
      ))

   const includeSearch = products
      .filter(
         (item) => 
         keys.some(key => item[key].toLowerCase().includes(query.toLowerCase()))
      )
      .map(item => (
         <Link to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} className="search-item" key={item.id} onClick={searchClose} state={item}>{item.title}</Link>
      ))
   
   const handleSearchClick = () => {
      setSearch(true)
      setTimeout(() => {
         inputRef.current.focus()
      }, 1000)
      document.body.style.overflow = "hidden"
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (query !== '' && productSearch.length !== 0 ) {
         let newItems = products.filter((item) => keys.some(key => item[key].toLowerCase().startsWith(query.toLowerCase())))
         searchClose()
         navigate(`/search-results/${query.toLowerCase()}`, { state: {items: newItems, search: query.toLowerCase()}})
      }

      if (query !== '' && productSearch.length === 0) {
         let newItems = products.filter((item) => keys.some(key => item[key].toLowerCase().includes(query.toLowerCase())))
         searchClose()
         navigate(`/search-results/${query.toLowerCase()}`, { state: {items: newItems, search: query.toLowerCase()}})
      }
   }

   // Search Optimization, search query needs to match keywords in the result array
   function extractValue(arr) {
      let extractedValue = arr.map(item => keys.map(key => item[key]))
      return extractedValue
   }

   const result = extractValue(products)
   console.log(result)

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
                                    {productSearch.length === 0 && includeSearch}
                                    {includeSearch.length === 0 && <h1 className="no-results">No Results for "{query}" found...</h1>}
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