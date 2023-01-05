import { useState } from 'react';

const Header = () => {
   const links = ['MEN', 'WOMEN', 'GIFTS']

   const [active, setActive] = useState()

   return (
      <header className="header">
         <div className="header-container">
            <nav className="header-left">
               <ul>
                  {links.map((link) => {
                     return (
                        <li key={link}>
                           <a 
                           href={`#${link}`}
                           className={`${active === link && 'active'}`}
                           // onClick={() => setActive(link)}
                           >{link}</a>
                           <div className={`item-container ${active === link && 'active'}`}>
                              
                           </div>
                        </li>
                     )
                  })}
               </ul>
            </nav>

            <img src="./img/logo.jpg" alt="logo" className="logo" />

            <div className="header-right">
               <ul>
                  <li><a href="#SEARCH"><span className="material-symbols-outlined">search</span></a></li>
                  <li><a href="#BAG"><span className="material-symbols-outlined">shopping_bag</span></a></li>
               </ul>
            </div>
         </div>
      </header>
   )
}

export default Header