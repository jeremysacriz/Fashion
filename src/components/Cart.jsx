import { useState, useEffect } from 'react';
import { CartState } from '../context/context';

export const Cart = ({cartStatus, setCartStatus}) => {
   const { 
      state: { cart },
      dispatch,
   } = CartState()

   const [total, setTotal] = useState()

   useEffect(() => {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
   }, [cart])

   return (
      <>
         <div className={cartStatus === true ? "cart-container active" : "cart-container"}>
            <div className="cart-width">
               <button className="cart-close" onClick={() => {
                  setCartStatus(false)
                  document.body.style.overflow = "visible"
               }}>
                  <span className="material-symbols-outlined">close</span>
               </button>
               {
                  cart.some(item => item.id) ? (
                     <>
                     {
                     cart.map(item => (
                        <div className="cart-item" key={item.id}>
                           <div className="cart-item-info">
                              <h1>{item.title}</h1>
                              <h2>{item.price}</h2>
                              <div className="cart-item-info-h3">
                                 <h3>Size: (S)</h3><h3>Qty: (1)</h3>
                              </div>
                              <button className="remove-cart-item" onClick={() => {
                                 dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item,
                                 })
                              }}><h1>Remove</h1></button>
                           </div>
                           <div className="cart-item-img">
                              <img src={item.src} alt="item 1" />
                           </div>
                        </div>
                     ))
                     }
                     <div className="cart-checkout">
                        <div className="cart-total">
                           <h1>Total: {cart.length === 1 ? '(' + cart.length + ') Item' : '(' + cart.length + ') Items'}
                           </h1>
                           <h2>{total}</h2>
                        </div>
                        <button className="proceed-cart-checkout">
                           <h1>Proceed To Checkout</h1>
                        </button>
                     </div>
                     </>
                  ) : (
                     <h1 className="empty-cart-title">Your cart is empty.</h1>
                  )
               }
            </div>
         </div>
      </>
   )
}
