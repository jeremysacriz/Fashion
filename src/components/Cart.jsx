import { CartState } from '../context/context';

export const Cart = ({cartStatus, setCartStatus}) => {
   const { 
      state: { cart },
      dispatch,
   } = CartState()

   return (
      <>
         <div className={cartStatus === true ? "cart-container active" : "cart-container"}>
            <button className="cart-close" onClick={() => setCartStatus(false)}>
               <span className="material-symbols-outlined">close</span>
            </button>
         </div>
      </>
   )
}
