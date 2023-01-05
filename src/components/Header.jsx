import { useState, useEffect, useRef } from 'react';

const Header = () => {
   const [active, setActive] = useState(null)

   const handleToggle = (index) => {
      if (active === index) {
         setActive(null)
      } else {
         setActive(index)
      }
   }

   const box = useRef(null)
   useOutsideAlerter(box)
   function useOutsideAlerter(ref) {
      useEffect(() => {
         function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
               setActive('')
            }
         }

         document.addEventListener('click', handleOutsideClick)
         return () => document.removeEventListener('click', handleOutsideClick)
      }, [ref])
   }
   
   const links = ['MEN', 'WOMEN', 'GIFTS']

   return (
      <header className="header" ref={box}>
         <div className="header-container">
            <nav className="header-left">
               <ul>
                  {links.map((link, index) => {
                     return (
                        <li key={index}>
                           <a 
                           href={`#${link}`}
                           className={`${active === link && 'active'}`}
                           onClick={() => handleToggle(link)}
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