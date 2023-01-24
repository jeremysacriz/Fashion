import { createContext, useReducer } from 'react';
import { cartReducer } from './reducers';
import { TshirtData, HoodieData, OuterwearData, CrossBodyBagsData, BackpacksData, SneakersData, SlidesSandalsData, JewelryData, SunglassesData, BeltsData } from './mensData';
import { WomensTshirtsData, WomensHoodieData, WomensOuterwearData, WomensShoulderBagsData, WomensMicroBagsData, WomensSneakersData, WomensHeelsData, WomensJewelryData, WomensBeltsData, WomensSunglassesData } from './womensData';
import { useContext } from 'react';
const Cart = createContext()

export const Context = ({children}) => {
   const mensProducts = TshirtData.concat(HoodieData, OuterwearData, CrossBodyBagsData, BackpacksData, SneakersData, SlidesSandalsData, JewelryData, SunglassesData, BeltsData)
   const womensProducts = WomensTshirtsData.concat(WomensHoodieData, WomensOuterwearData, WomensShoulderBagsData, WomensMicroBagsData, WomensSneakersData, WomensHeelsData, WomensJewelryData, WomensBeltsData, WomensSunglassesData)
   const products = mensProducts.concat(womensProducts)

   const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart: []
   })

   return (
      <Cart.Provider value={{ state, dispatch }}>
         {children}
      </Cart.Provider>
   )
}

export const CartState = () => {
   return useContext(Cart)
}