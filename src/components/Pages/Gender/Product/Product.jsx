import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../../../../context/context';

export const Product = () => {   
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

   const addToCart = (e) => {
      e.preventDefault()

      if (size === undefined) {
         setErrorMessage("Please select a size")
      } else {
         dispatch({
            type: "ADD_TO_CART",
            payload: {...itemData},
         })
         setErrorMessage()
      }
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
                  <button className="product-arrow-left"><span className="material-symbols-outlined" onClick={indexLeft}>chevron_left</span></button>
                  <button className="product-arrow-right"><span className="material-symbols-outlined" onClick={indexRight}>chevron_right</span></button>
               </div>
            </div>
            <div className="product-info-container">
               <div className="product-info">
                  <h1 className="product-title">{data.title}</h1>
                  <h2 className="product-price">$ {data.price}</h2>

                  <form className="product-sizes-form" onSubmit={addToCart}>
                     <div className="product-sizes">
                        <button className={size === 'XS' ? 'active' : 'inactive'} name="XS" type="button" onClick={itemSize}>XS</button>
                        <button className={size === 'S' ? 'active' : 'inactive'} name="S" type="button" onClick={itemSize}>S</button>
                        <button className={size === 'M' ? 'active' : 'inactive'} name="M" type="button" onClick={itemSize}>M</button>
                        <button className={size === 'L' ? 'active' : 'inactive'} name="L" type="button" onClick={itemSize}>L</button>
                        <button className={size === 'XL' ? 'active' : 'inactive'} name="XL" type="button" onClick={itemSize}>XL</button>
                        {size === undefined && <h1 className='select-size'>{errorMessage}</h1>}
                     </div>
                     <button className="product-bag" type="submit">
                        <h1>Add to Bag</h1>
                     </button>
                  </form>
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
