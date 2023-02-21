import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { CartState } from '../context/context';
import { zodResolver } from "@hookform/resolvers/zod"
import { string, z } from 'zod'

export const Checkout = () => {
   const { 
      state: { cart },
      dispatch
   } = CartState()

   const [total, setTotal] = useState()
   const [qty, setQty] = useState()
   const [active, setActive] = useState(false)
   const [confirmed, setConfirmed] = useState(false)
   const [formValues, setFormValues] = useState()

   const schema = z.object({
      name: string().min(1, { message: 'Name is required' }),
      email: string().email()
   })

   const { register, handleSubmit, formState } = useForm({resolver: zodResolver(schema)})
   const { errors } = formState
   
   const cartConfirm = () => {
      window.scrollTo(0, 0)
      setActive(true)
      document.body.style.overflow = "hidden"
   }
   
   const confirmPurchase = (formValues) => {
      setConfirmed(true)
      setFormValues(formValues)
   }

   const clearForm = () => {
      setActive(false)
      document.body.style.overflow = "visible"
   }

   const backToHome = () => {
      cart.length = 0
      document.body.style.overflow = "visible"
   }

   useEffect(() => {
      setTotal(cart.reduce((acc, item) => acc + Number(item.price * item.qty), 0))
      setQty(cart.reduce((acc, item) => acc + Number(item.qty), 0))
   }, [cart])

   return (
      <div className="checkout-container">
         {
            cart.length !== 0 ? (
               <>
               <div className="checkout">
                  <div className="checkout-title">
                     <h1>Please confirm your purchase:</h1>
                  </div>
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
                        <button className="proceed-cart-checkout" onClick={cartConfirm}>
                           <h1>Proceed To Checkout</h1>
                        </button>
                     </div>
               </div>
               </>
            ) : (
               <h1 className="empty-cart-title">Your cart is empty...</h1>
            )
         }
         <div className={active === true ? "checkout-auth active" : "checkout-auth"}>
            <div className="checkout-info">
               <form className={confirmed === false ? "checkout-form active" : "checkout-form"} onSubmit={handleSubmit(confirmPurchase)}>
                  <button type="button" className="checkout-close" onClick={clearForm}>
                     <span className="material-symbols-outlined">close</span>
                  </button>
                  <div className="checkout-form-title">
                     <h1>Please provide your details:</h1>
                  </div>
                  <div>
                     <input type="text" placeholder="Name" className="checkout-name" autoComplete="off" {...register('name')}/>
                     <div className="error-message">{errors.name?.message}</div>
                  </div>
                  <div>
                     <input type="email" placeholder="Email" className="checkout-email" autoComplete="off" {...register('email')}/>
                     <div className="error-message">{errors.email?.message}</div>
                  </div>
                  <button type="submit" className="checkout-btn">Submit</button>
               </form>
               <div className={confirmed === true ? "checkout-confirmed active" : "checkout-confirmed"}>
                  <h1>Hey {formValues && formValues.name}, we have sent you a receipt to your email at {formValues && formValues.email}. Thank you for shopping at my E-Commerce Store</h1>
                  <Link to="/" className="notfound-btn" onClick={backToHome}>Back to Homepage</Link>
               </div>
            </div>
         </div>
      </div>
   )
}
