import { v4 as uuid } from 'uuid'

export const cartReducer = (state, action) => {
   const unique_id = uuid()
   const small_id = unique_id.slice(0, 8)

   switch (action.type) {
      case "ADD_TO_CART":
         const itemExists = state.cart.find((item) => item.id === action.payload.id && item.size === action.payload.size)
         if (itemExists) return {
            ...state,
            cart: state.cart.filter((product) => 
               product.id === action.payload.id ? ( product.qty = product.qty + 0.5 ) : product.qty
            )
         }
         return {
            ...state, 
            cart: [...state.cart, {...action.payload, qty: 1, cartID: small_id}],
         }
      case "REMOVE_FROM_CART":
         return {
            ...state, 
            cart: state.cart.filter(product => product.id !== action.payload.id),
         }
      default:
         return state;
   }
}

// Notes:
// action parameter takes two things, type ("ADD_TO_CART) & payload (contains data that we want to put in the state)