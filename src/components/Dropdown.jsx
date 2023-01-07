import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { mensReadyToWear, mensBags, mensShoes, mensAccessories, womensReadyToWear, womensBags, womensShoes, womensAccessories, gifts } from "./Data";

export const MensDropdown = () => {
   const [dropdown, setDropdown] = useState(false)

   const MensList = ({item}) => {
      return (
         <li className={`submenu-item ${item.cName}`}>
            <Link to={item.path} className="submenu-btn">{item.title}</Link>
         </li>
      )
   }
   
   return (
      <>
         <ul
         className="submenu"
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


export const WomensDropdown = () => {
   const [dropdown, setDropdown] = useState(false)

   const WomensList = ({item}) => {
      return (
         <li className={`submenu-item ${item.cName}`}>
            <Link to={item.path} className="submenu-btn">{item.title}</Link>
         </li>
      )
   }
   
   return (
      <>
         <ul
         className="submenu"
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


export const GiftsDropdown = () => {
   const [dropdown, setDropdown] = useState(false)

   const GiftsList = ({item}) => {
      return (
         <li className={`submenu-item ${item.cName}`}>
            <Link to={item.path} className="submenu-btn">{item.title}</Link>
         </li>
      )
   }
   
   return (
      <>
         <ul
         className="submenu"
         onClick={() => setDropdown(!dropdown)}
         >
            <div className="submenu-list">
               <div className="submenu-title">Ready-to-Wear</div>
               {gifts.map(item => {
                  return (
                     <GiftsList item={item} key={item.id} />
                  )
               })}
            </div>
         </ul>
      </>
   )
}