import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import  { headerItems } from './HeaderData';
import { MensDropdown, WomensDropdown, GiftsDropdown } from './index';

export const Header = () => {
   const [active, setActive] = useState()
   const [search, setSearch] = useState()

   const inputRef = useRef(null)

   return (
      <>
      <header className="header">
         <div className="header-container">
            <nav className="header-left">
               <ul className="header-left-container">
                  {headerItems.map(item => {
                     if (item.title === "MEN") {
                        return (
                           <li 
                           key={item.id}
                           className={item.cName}
                           onMouseEnter={() => setActive(item.title)}
                           onMouseLeave={() => setActive()}
                           >
                              <Link className={active === "MEN" ? 'list-btn active' : 'list-btn'}>{item.title}</Link>
                              <div className={active === "MEN" ? "submenu-container active" : 'submenu-container'}>
                                 <MensDropdown />
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
                              <Link className={active === "WOMEN" ? 'list-btn active' : 'list-btn'}>{item.title}</Link>
                              <div className={active === "WOMEN" ? "submenu-container active" : 'submenu-container'}>
                                 <WomensDropdown />
                              </div>
                           </li>
                        )
                     } else if (item.title === "GIFTS") {
                        return (
                           <li 
                           key={item.id}
                           className={item.cName}
                           onMouseEnter={() => setActive(item.title)}
                           onMouseLeave={() => setActive()}
                           >
                              <Link className={active === "GIFTS" ? 'list-btn active' : 'list-btn'}>{item.title}</Link>
                              <div className={active === "GIFTS" ? "submenu-container active" : 'submenu-container'}>
                                 <GiftsDropdown />
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
               <img src="./img/logo.jpg" alt="logo" className="logo" />
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
                           <div className={search === true ? 'search-content' : null}>
                              <div className="search-input-width">
                                 <div className="search-input-container">
                                    <input type="text" className="search-input" placeholder="Search..." ref={inputRef} />
                                    <button className="search-btn">
                                       <span className="material-symbols-outlined search-icon">search</span>
                                    </button>
                                 </div>
                                 <span className="material-symbols-outlined close" onClick={() => {
                                    setSearch(false)
                                    document.body.style.overflow = "visible"
                                 }}>close</span>
                              </div>
                              <div className="search-body-container">

                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li>
                     <Link to="/cart">
                        <span className="material-symbols-outlined">shopping_bag</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </header>
      </>
   )
}