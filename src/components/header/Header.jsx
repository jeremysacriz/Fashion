import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  { headerItems } from './HeaderData';
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

   const keys = ['title', 'gender', 'categories', 'category']

   const searchClose = () => {
      setQuery('')
      setSearch(false)
      document.body.style.overflow = "visible"
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (query !== '') {
         let newProducts = products.filter((item) => keys.some(key => item[key].toLowerCase().includes(query.toLowerCase())))
         searchClose()
         // Pass the newProducts array data to SearchResults component & display each ProductItem using .map()
         navigate(`/search-results/${query}`, { state: {products: newProducts, search: query} })
      }
   }

   const filterSearch = (data) => {
      return (
         data.filter(
            (item) => 
            keys.some(key => item[key].toLowerCase().includes(query.toLowerCase()))
         )
      )
   }

   return (
      <>
      <header className="header">
         <div className="header-container">
            <nav className="header-left">
               <ul className="header-left-container" onMouseEnter={() => {setActive("MEN")}}>
                  {headerItems.map(item => {
                     if (item.title === "MEN") {
                        return (
                           <li 
                           key={item.id}
                           className={item.cName}
                           onMouseEnter={() => setActive(item.title)}
                           onMouseLeave={() => setActive()}
                           >
                              <Link 
                              to='/mens' 
                              className={active === "MEN" ? 'list-btn active' : 'list-btn'}
                              onClick={() => {
                                 setActive()
                              }}>
                                 {item.title}
                              </Link>
                              <div className={active === "MEN" ? "submenu-container active" : "submenu-container"}>
                                 <MensDropdown className={active === "MEN" ? "submenu active" : "submenu"} />
                              </div>
                           </li>
                        )
                     } else if (item.title === "WOMEN") {
                        return (
                           <li 
                           key={item.id}
                           className={item.cName}
                           onMouseEnter={() => setActive(item.title)}
                           onMouseLeave={() => setActive()}
                           >
                              <Link 
                              to="/womens" 
                              className={active === "WOMEN" ? 'list-btn active' : 'list-btn'} 
                              onClick={() => {
                                 setActive()
                              }}>
                                 {item.title}
                              </Link>
                              <div className={active === "WOMEN" ? "submenu-container active" : "submenu-container"}>
                                 <WomensDropdown className={active === "WOMEN" ? "submenu active" : "submenu"} />
                              </div>
                           </li>
                        )
                     }
                     
                     return (
                        <li key={item.id} className={item.cName}>
                           <Link className="list-btn">{item.title}</Link>
                        </li>
                     )
                  })}
               </ul>
            </nav>

            <Link to="/">
               <img src="/img/logo.jpg" alt="logo" className="logo" />
            </Link>

            <div className="header-right">
               <ul>
                  <li>
                     <button onClick={() => {
                        setSearch(true)
                        inputRef.current.focus()
                        document.body.style.overflow = "hidden"
                     }}>
                        <span className="material-symbols-outlined">search</span>
                     </button>
                     <div className={search === true ? 'search-overlay active' : 'search-overlay'}></div>
                     <div className={search === true ? 'search-container active' : 'search-container'}>
                        <div className={search === true ? 'search active' : 'search'}>
                           <div className={search === true ? 'search-content active' : 'search-content'}>
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
                                    {query && filterSearch(products).map(item => (
                                          <Link to={'/' + item.gender + '/' + item.categories.toLowerCase() + '/' + item.linkcategory + item.path} className="search-item" key={item.id} onClick={searchClose} state={item}>{item.title}</Link>
                                       ))
                                    }
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