import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mensReadyToWear, mensBags, mensShoes, mensAccessories, womensReadyToWear, womensBags, womensShoes, womensAccessories } from "./HeaderData";

export const MensDropdown = (props) => {
   const [dropdown, setDropdown] = useState(false)

   const MensList = ({item, setActive}) => {
      return (
         <li className={`submenu-item ${item.cName}`}>
            <Link to={'mens' + item.path} className="submenu-btn" onClick={() => setActive(false)}>{item.title}</Link>
         </li>
      )
   }
   
   return (
      <>
         <ul
         className={props.className}
         onClick={() => setDropdown(!dropdown)}
         >
            <div className="submenu-list">
               <div className="submenu-title">Ready-to-Wear</div>
               {mensReadyToWear.map(item => {
                  return (
                     <MensList item={item} key={item.id} />
                  )
               })}
            </div>
            <div className="submenu-list">
               <div className="submenu-title">Bags</div>
               {mensBags.map(item => {
                  return (
                     <MensList item={item} key={item.id} />
                  )
               })}
            </div>
            <div className="submenu-list">
               <div className="submenu-title">Shoes</div>
               {mensShoes.map(item => {
                  return (
                     <MensList item={item} key={item.id} />
                  )
               })}
            </div>
            <div className="submenu-list">
               <div className="submenu-title">Accessories</div>
               {mensAccessories.map(item => {
                  return (
                     <MensList item={item} key={item.id} />
                  )
               })}
            </div>
         </ul>
      </>
   )
}


export const WomensDropdown = (props) => {
   const [dropdown, setDropdown] = useState(false)

   const WomensList = ({item, setActive}) => {
      return (
         <li className={`submenu-item ${item.cName}`}>
            <Link to={'womens' + item.path} className="submenu-btn" onClick={() => setActive(false)}>{item.title}</Link>
         </li>
      )
   }
   
   return (
      <>
         <ul
         className={props.className}
         onClick={() => setDropdown(!dropdown)}
         >
            <div className="submenu-list">
               <div className="submenu-title">Ready-to-Wear</div>
               {womensReadyToWear.map(item => {
                  return (
                     <WomensList item={item} key={item.id} />
                  )
               })}
            </div>
            <div className="submenu-list">
               <div className="submenu-title">Bags</div>
               {womensBags.map(item => {
                  return (
                     <WomensList item={item} key={item.id} />
                  )
               })}
            </div>
            <div className="submenu-list">
               <div className="submenu-title">Shoes</div>
               {womensShoes.map(item => {
                  return (
                     <WomensList item={item} key={item.id} />
                  )
               })}
            </div>
            <div className="submenu-list">
               <div className="submenu-title">Accessories</div>
               {womensAccessories.map(item => {
                  return (
                     <WomensList item={item} key={item.id} />
                  )
               })}
            </div>
         </ul>
      </>
   )
}