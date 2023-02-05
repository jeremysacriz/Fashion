import { v4 as uuid } from 'uuid'

export const cartReducer = (state, action) => {
   const unique_id = uuid()
   const small_id = unique_id.slice(0, 8)

   switch (action.type) {
      case "ADD_TO_CART":
         const itemExists = state.cart.find((item) => item.hasOwnProperty('cartID') && item.size === action.payload.size)

         if (itemExists) {
            const newCart = state.cart.map((product) => {
               if (product.cartID === itemExists.cartID) {
                  return {...product, qty: itemExists.qty + 1}
               }
   
               return product
            })
            
            return {
               ...state,
               cart: newCart
            }
         }

         // Default solution: (Solves +0.5 to qty bug)
         // if (itemExists) return {
         //    ...state,
         //    cart: state.cart.filter((product) => 
         //       product.id === action.payload.id && product.size === action.payload.size ? ( product.qty = product.qty + 0.5 ) : product.qty
         //    )
         // }

         return {
            ...state, 
            cart: [...state.cart, {...action.payload, qty: 1, cartID: small_id}],
         }

      case "REMOVE_FROM_CART":
         const cartItem = state.cart.find((item) => item.cartID === action.payload.cartID)
         if (cartItem.qty > 1) {
            const updatedCart = state.cart.map((product) => {
               if (product.cartID === cartItem.cartID) {
                  return {...product, qty: cartItem.qty - 1}
               }
   
               return product
            })

            return {
               ...state,
               cart: updatedCart
            }
         }

         // Default solution: (Solves +0.5 to qty bug)
         // if (cartItem.qty > 1) return {
         //    ...state, 
         //    cart: state.cart.filter((product) => 
         //       product.cartID === action.payload.cartID ? ( product.qty = product.qty - 0.5 ) : product.qty
         //    ),
         // }

         return {
            ...state, 
            cart: state.cart.filter(product => product.cartID !== action.payload.cartID),
         }
      default:
         return state;
   }
}

// Notes:
// action parameter takes two things, type ("ADD_TO_CART) & payload (contains data that we want to put in the state)