import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/index.css';
import { 
   NotFound, Header, Main, Footer, Mens, Womens, Gifts, 
   MensAllReadyToWear, Tshirts, SweatsHoodies, JacketsCoats, MensAllBags, CrossBodyBags, Backpacks, MensAllShoes, Sneakers, SlidesSandals, MensAllAccessories, Jewelry, Sunglasses, Belts, ProductView,
   WomensTshirts, WomensSweatsHoodies, WomensOuterwearBlousons, WomensShoulderBags, WomensMicroBags, WomensSneakers, WomensHeels, WomensJewelry, WomensBelts, WomensSunglasses
} from './components';

const App = () => {
   return (
      <section id="index">
         <Header />

         <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/mens" element={<Mens />}></Route>
            <Route path="/womens" element={<Womens />}></Route>
            <Route path="/gifts" element={<Gifts />}></Route>
            <Route path="/mens/all-ready-to-wear" element={<MensAllReadyToWear />}></Route>
            <Route path="/mens/ready-to-wear/t-shirts" element={<Tshirts />}></Route>
            <Route path="/mens/ready-to-wear/sweats-hoodies" element={<SweatsHoodies />}></Route>
            <Route path="/mens/ready-to-wear/jackets-coats" element={<JacketsCoats />}></Route>
            <Route path="/mens/all-bags" element={<MensAllBags />}></Route>
            <Route path="/mens/bags/cross-body-bags" element={<CrossBodyBags />}></Route>
            <Route path="/mens/bags/backpacks" element={<Backpacks />}></Route>
            <Route path="/mens/all-shoes" element={<MensAllShoes />}></Route>
            <Route path="/mens/shoes/sneakers" element={<Sneakers />}></Route>
            <Route path="/mens/shoes/slides-sandals" element={<SlidesSandals />}></Route>
            <Route path="/mens/all-accessories" element={<MensAllAccessories />}></Route>
            <Route path="/mens/accessories/jewelry" element={<Jewelry />}></Route>
            <Route path="/mens/accessories/sunglasses" element={<Sunglasses />}></Route>
            <Route path="/mens/accessories/belts" element={<Belts />}></Route>
            <Route path="/womens/ready-to-wear/t-shirts" element={<WomensTshirts />}></Route>
            <Route path="/womens/ready-to-wear/sweats-hoodies" element={<WomensSweatsHoodies />}></Route>
            <Route path="/womens/ready-to-wear/outerwear-blousons" element={<WomensOuterwearBlousons />}></Route>
            <Route path="/womens/bags/shoulder-bags" element={<WomensShoulderBags />}></Route>
            <Route path="/womens/bags/micro-bags" element={<WomensMicroBags />}></Route>
            <Route path="/womens/shoes/sneakers" element={<WomensSneakers />}></Route>
            <Route path="/womens/shoes/heels" element={<WomensHeels />}></Route>
            <Route path="/womens/accessories/jewelry" element={<WomensJewelry />}></Route>
            <Route path="/womens/accessories/belts" element={<WomensBelts />}></Route>
            <Route path="/womens/accessories/sunglasses" element={<WomensSunglasses />}></Route>
            <Route path="/mens/:category/:product/:item" element={<ProductView />}></Route>
            <Route path="/womens/:category/:product/:item" element={<ProductView />}></Route>
            <Route path="*" element={<NotFound />}></Route>
         </Routes>
         
         <Footer />
      </section>
   )
}

export default App;
