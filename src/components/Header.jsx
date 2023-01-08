import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  { headerItems } from './Data';
import { MensDropdown, WomensDropdown, GiftsDropdown } from './index';

export const Header = () => {
   const [active, setActive] = useState()

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

            <Link to="/home">
               <img src="./img/logo.jpg" alt="logo" className="logo" />
            </Link>

            <div className="header-right">
               <ul>
                  <li>
                     <Link to="/search">
                        <span className="material-symbols-outlined">search</span>
                        </Link>
                  </li>
                  <li>
                     <Link to="/bags">
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