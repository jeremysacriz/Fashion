import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  { headerItems } from './Data';
import { MensDropdown, WomensDropdown, GiftsDropdown } from './index';

export const Header = () => {
   const [mensActive, setMensActive] = useState(false)
   const [womensActive, setWomensActive] = useState(false)
   const [giftsActive, setGiftsActive] = useState(false)

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
                           onMouseEnter={() => setMensActive(true)}
                           onMouseLeave={() => setMensActive(false)}
                           >
                              <Link className={`${mensActive === true ? 'list-btn active' : 'list-btn'}`}>{item.title}</Link>
                              <div className={mensActive === true ? "submenu-container active" : 'submenu-container'}>
                                 <MensDropdown />
                              </div>
                           </li>
                        )
                     } else if (item.title === "WOMEN") {
                        return (
                           <li 
                           key={item.id}
                           className={item.cName}
                           onMouseEnter={() => setWomensActive(true)}
                           onMouseLeave={() => setWomensActive(false)}
                           >
                              <Link className={`${womensActive === true ? 'list-btn active' : 'list-btn'}`}>{item.title}</Link>
                              <div className={womensActive === true ? "submenu-container active" : 'submenu-container'}>
                                 <WomensDropdown />
                              </div>
                           </li>
                        )
                     } else if (item.title === "GIFTS") {
                        return (
                           <li 
                           key={item.id}
                           className={item.cName}
                           onMouseEnter={() => setGiftsActive(true)}
                           onMouseLeave={() => setGiftsActive(false)}
                           >
                              <Link className={`${giftsActive === true ? 'list-btn active' : 'list-btn'}`}>{item.title}</Link>
                              <div className={giftsActive === true ? "submenu-container active" : 'submenu-container'}>
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