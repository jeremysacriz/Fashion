import { Link } from 'react-router-dom';

export const Main = () => {

   const MainTitle = (props) => {
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
            <div className="main-img-container">
               <img src="./img/mens.jpg" alt="MENS" className="main-img main-img-mens" />
               <Link to="/mens">
                  <MainTitle className="main-img-title">
                     <h1>Explore Mens</h1>
                  </MainTitle>
               </Link>
            </div>
            <div className="main-img-container">
               <img src="./img/womens.jpg" alt="WOMENS" className="main-img" />
               <Link to="/womens">
                  <MainTitle className="main-img-title">
                     <h1>Explore Womens</h1>
                  </MainTitle>
               </Link>
            </div>
         </div>
         <div className="gifts-container">
            <div className="gifts-img-container">
               <img src="./img/gifts.jpg" alt="GIFTS" className="gifts-img" />
               <Link to="/gifts">
                  <MainTitle className="gifts-img-title">
                     <h1>Shop Gifts</h1>
                  </MainTitle>
               </Link>
            </div>
         </div>
      </div>
   )
}