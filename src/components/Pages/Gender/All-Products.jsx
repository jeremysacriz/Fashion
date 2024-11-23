import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Catalogue = ({title, description, data, link1, link2, link3, gender, category, products}) => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const scrollUp = () => {
      window.scrollTo(0, 0);
   }

   return (
      <div className="item-container"> 
         <div className="item-title">
            <h1>{title}</h1>
            <p>{description}</p>
         </div>

         <div className="item-grid-container">
            {data}
         </div>

         <div className="item-nav">
            <Link to={link1} className="item-btn">{gender}</Link>
            <span className="forward-slash">/</span>
            <Link to={link2} className="item-btn">{category}</Link>
            <span className="forward-slash">/</span>
            <Link to={link3} className="item-btn" onClick={scrollUp}>{products}</Link>
         </div>
      </div>
   )
}

export const CatalogueTitle = ({title, product}) => {
   return (
      <div className="item-title">
         <h1>{title}</h1>
         <p>{product.products.length} results for {product.category}</p>
      </div>
   )
}

export const CatalogueFilter = ({active, toggleActive, box, product, category, filterAll, button}) => {
   return (
      <div className="item-filter">
         <h1 className="item-filter-title">Filter By:</h1>
         <div className={active === true ? "item-filter-btn active" : "item-filter-btn"} onClick={toggleActive} ref={box}>
            <h1 className="filter-category">Category: {product.category}</h1>
            <span className="material-symbols-outlined filter-more">expand_more</span>
            <div className={active === true ? "filter-dropdown active" : 'filter-dropdown'}>
               <button className={product.category === category ? "filter-btn-inactive" : "filter-btn"} onClick={filterAll}><h1>{category}</h1></button>
               {button}
            </div>
         </div>
      </div>
   )
}

export const CatalogueGridData = ({gridData, link1, link2, gender, pageReload, category}) => {
   return (
      <>
         <div className="item-grid-container">
            {gridData}
         </div>

         <div className="item-nav">
            <Link to={link1} className="item-btn">{gender}</Link>
            <span className="forward-slash">/</span>
            <Link to={link2} className="item-btn" onClick={pageReload}>{category}</Link>
         </div>
      </>
   )
}