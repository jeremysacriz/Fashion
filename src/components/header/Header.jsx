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
   const terms = query.toLowerCase().replace(/[^\w ]/g, '').split(' ')

   const searchMap = (object) => {
      return object
      .map(item => (
         <Link to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} className="search-item" key={item.id} onClick={searchClose} state={item}>{item.title}</Link>
      ))
   }

   const filterProducts = products
      .filter(item => {
         return terms.every(term =>
            Object.values(item).some(() => keys.some(key => item[key].toLowerCase().replace(/[^\w ]/g, '').startsWith(term)))
         )
      })

   const productSearch = searchMap(filterProducts)
   // console.log(filterProducts)

   const keywordProducts = products
      .filter(item => {
         let objectValues = keys.map(key => item[key].toLowerCase().replace(/[^\w ]/g, ''))
         
         return terms.every(term =>
            objectValues.some(() => keys.some(key => item[key].toLowerCase().replace(/[^\w ]/g, '').includes(term)))
         )
      })

   const keywordSearch = searchMap(keywordProducts)
   console.log(keywordProducts)


   // Search Optimization, search query needs to match keywords in the result array
   const productSearch1 = products
   .map(
      (item) =>
      keys.map(key => {
         let firstArr = item[key].split('-').map(product => product.toLowerCase()).join('').replace(/[^\w ]/g, '')

         if (firstArr.split(' ').length > 1) {
            let splitStr = firstArr.split(' ')
            return splitStr.flat()
         }

         return firstArr
      })
   )

   const productSearch2 = productSearch1.map(item => item.flat())
   // console.log(productSearch2)

   let searchQuery = query.toLowerCase().split(' ')
   const filterSearch = productSearch2
   .map(item => item.filter(() => searchQuery.every(elem => item.some(product => product.startsWith(elem)))))
   .filter(item => item.length !== 0)

   // console.log(filterSearch)

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