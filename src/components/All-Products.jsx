import { Link } from 'react-router-dom';

export const CatalogueTitle = ({title, data, category}) => {
   return (
      <div className="item-title">
         <h1>{title}</h1>
         <p>{data.length} results for {category}</p>
      </div>
   )
}

export const CatalogueFilter = ({active, toggleActive, box, category, setCategory, filterAll, button}) => {
   return (
      <div className="item-filter">
         <h1 className="item-filter-title">Filter By:</h1>
         <div className={active === true ? "item-filter-btn active" : "item-filter-btn"} onClick={toggleActive} ref={box}>
            <h1 className="filter-category">Category: {category}</h1>
            <span className="material-symbols-outlined filter-more">expand_more</span>
            <div className={active === true ? "filter-dropdown active" : 'filter-dropdown'}>
               <button className={category === setCategory ? "filter-btn-inactive" : "filter-btn"} onClick={filterAll}><h1>{setCategory}</h1></button>
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