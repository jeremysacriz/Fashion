export const cartReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_CART":
         return {
            ...state, 
            cart: [...state.cart, {...action.payload, qty: 1}],
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