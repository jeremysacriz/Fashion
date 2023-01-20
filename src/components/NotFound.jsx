import { Link } from 'react-router-dom';

export const NotFound = () => {
   return (
      <div className="notfound-container">
         <span className="material-symbols-outlined">sentiment_dissatisfied</span>
         <h1>Error 404 - Page Not Found</h1>
         <Link to="/" className="NotFoundButton">Go To Homepage</Link>
      </div>
   )
}
