import { Link } from 'react-router-dom';

export const Main = () => {

   const MainBtn = (props) => {
      return (
         <div className={props.className}>
            {props.children}
            <span className="material-symbols-outlined">chevron_right</span>
         </div>
      )
   }
   
   return (
      <div className="index-container">
         <div className="shop-container">
            <Link to="/mens" className="main-img-container">
               <img src="./img/mens.jpg" alt="MENS" className="main-img main-img-mens" />
               <h1 className="main-title">Mens</h1>
               <MainBtn className="main-img-btn">
                  <h1>Explore Mens</h1>
               </MainBtn>
            </Link>
            <Link to="/womens" className="main-img-container">
               <img src="./img/womens.jpg" alt="WOMENS" className="main-img" />
               <h1 className="main-title">Womens</h1>
               <MainBtn className="main-img-btn">
                  <h1>Explore Womens</h1>
               </MainBtn>
            </Link>
         </div>
         <div className="gifts-container">
            <Link to="/gifts" className="gifts-img-container">
               <img src="./img/gifts.jpg" alt="GIFTS" className="gifts-img" />
               <h1 className="gifts-title">Gifts</h1>
               <MainBtn className="gifts-img-btn">
                  <h1>Shop Gifts</h1>
               </MainBtn>
            </Link>
         </div>
      </div>
   )
}