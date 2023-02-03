import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../context/context';

export const ProductView = () => {   
   const [activeIndex, setActiveIndex] = useState(0)
   const [size, setSize] = useState()
   const [errorMessage, setErrorMessage] = useState('')

   const location = useLocation()
   const data = location.state

   const [itemData, setItemData] = useState({...data})

   const itemSize = (e) => {
      let size = e.target.name
      setSize(size)
      setItemData({...itemData, size})
   }

   const {
      dispatch,
   } = CartState()

   const indexRight = () => {
      let newArr = itemData.arr
      setActiveIndex(activeIndex + 1)

      if (activeIndex === newArr.length - 1) {
         setActiveIndex(0)
      }
   }

   const indexLeft = () => {
      let newArr = itemData.arr
      setActiveIndex(activeIndex - 1)

      if (activeIndex === 0) {
         setActiveIndex(newArr.length - 1)
      }
   }

   const addToCart = () => {
      dispatch({
         type: "ADD_TO_CART",
         payload: {...itemData},
      })
      setErrorMessage()
   }

   useEffect(() => {
      setSize()
      window.scrollTo(0, 0)
   }, [data])

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
                  <h2 className="product-price">$ {data.price}</h2>

                  <div className="product-sizes">
                     <button className={size === 'XS' ? 'active' : 'inactive'} name="XS" onClick={itemSize}>XS</button>
                     <button className={size === 'S' ? 'active' : 'inactive'} name="S" onClick={itemSize}>S</button>
                     <button className={size === 'M' ? 'active' : 'inactive'} name="M" onClick={itemSize}>M</button>
                     <button className={size === 'L' ? 'active' : 'inactive'} name="L" onClick={itemSize}>L</button>
                     <button className={size === 'XL' ? 'active' : 'inactive'} name="XL" onClick={itemSize}>XL</button>
                     {size === undefined && <h1 className='select-size'>{errorMessage}</h1>}
                  </div>
                  {size === undefined ? (
                     <button className="product-bag" onClick={() => {
                        setErrorMessage("Please select a size") 
                     }}><h1>Add to Bag</h1></button>
                  ) : (
                     <button className="product-bag" onClick={addToCart}>
                        <h1>Add to Bag</h1>
                     </button>
                  )}
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
