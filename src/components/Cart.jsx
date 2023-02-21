import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../context/context';

export const Cart = ({cartStatus, setCartStatus}) => {
   const { 
      state: { cart },
      dispatch,
   } = CartState()

   const [total, setTotal] = useState()
   const [qty, setQty] = useState()

   const cartClose = () => {
      setCartStatus(false)
      document.body.style.overflow = "visible"
   }

   useEffect(() => {
      setTotal(cart.reduce((acc, item) => acc + Number(item.price * item.qty), 0))
      setQty(cart.reduce((acc, item) => acc + Number(item.qty), 0))
   }, [cart])

   return (
      <>
         <div className={cartStatus === true ? "cart-overlay active" : "cart-overlay"}></div>
         <div className={cartStatus === true ? "cart-container active" : "cart-container"}>
            <div className="cart-width">
               <button className="cart-close" onClick={cartClose}>
                  <span className="material-symbols-outlined">close</span>
               </button>
               {
                  cart.length !== 0 ? (
                     <>
                     {
                     cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                           <div className="cart-item-info">
                              <h1>{item.title}</h1>
                              <h2>$ {item.price}</h2>
                              <div className="cart-item-info-h3">
                                 <h3>Size: {'( ' + item.size + ' )'}</h3>
                                 <h3>Qty: {item.qty}</h3>
                              </div>
                              <button className="remove-cart-item" onClick={() => {
                                 dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item
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
                           <h1>Total: {qty === 1 ? '(' + qty + ') Item' : '(' + qty + ') Items'}
                           </h1>
                           <h1>$ {total}</h1>
                        </div>
                        <Link to="/checkout" onClick={cartClose}>
                           <button className="proceed-cart-checkout">
                              <h1>Proceed To Checkout</h1>
                           </button>
                        </Link>
                     </div>
                     </>
                  ) : (
                     <h1 className="empty-cart-title">Your cart is empty ...</h1>
                  )
               }
            </div>
         </div>
      </>
   )
}
