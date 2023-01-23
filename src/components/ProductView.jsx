import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ProductView = () => {
   const [activeIndex, setActiveIndex] = useState(0)

   const location = useLocation()
   const data = location.state

   const indexRight = () => {
      let newArr = data.arr
      setActiveIndex(activeIndex + 1)

      if (activeIndex === newArr.length - 1) {
         setActiveIndex(0)
      }
   }

   const indexLeft = () => {
      let newArr = data.arr
      setActiveIndex(activeIndex - 1)

      if (activeIndex === 0) {
         setActiveIndex(newArr.length - 1)
      }
   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className="product-container">
         <div className="product-flex-container">
            <div className="product-image">
               <div className="product-index">
                  <h1>{activeIndex + 1} / {data.arr.length}</h1>
               </div>
               <div className="product-image-carousel">
                  {
                     data.arr.map((img, index) => {
                        return (
                           <img key={index} src={img} alt="img" className={index === activeIndex ? "product-img active" : "product-img"} />
                        )
                     })
                  }
               </div>
               <div className="product-image-buttons">
                  <span className="material-symbols-outlined product-arrow-left" onClick={indexLeft}>chevron_left</span>
                  <span className="material-symbols-outlined product-arrow-right" onClick={indexRight}>chevron_right</span>
               </div>
            </div>
            <div className="product-info-container">
               <div className="product-info">
                  <h1 className="product-title">{data.title}</h1>
                  <h2 className="product-price">{data.price}</h2>

                  <div className="product-sizes">
                     <button>XS</button>
                     <button>S</button>
                     <button>M</button>
                     <button>L</button>
                     <button>XL</button>
                  </div>
                  <button className="product-bag"><h1>Add to Bag</h1></button>
               </div>
            </div>
         </div>

         <div className="product-nav">
            <Link to={'/' + data.gender} className="product-btn">{data.gender}</Link>
            <span className="forward-slash">/</span>
            <Link to={'/' + data.gender + '/all-' + data.categories.toLowerCase()} className="product-btn">{data.categories}</Link>
            <span className="forward-slash">/</span>
            <Link to={'/' + data.gender + '/' + data.categories.toLowerCase() + '/' + data.linkcategory} className="product-btn">{data.category}</Link>
         </div>

      </div>
   )
}
