import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-container">
            <div className="footer-media">
               <Link to="./FaceBook"><i className="fa-brands fa-facebook"></i></Link>
               <Link to="./Instagram"><i className="fa-brands fa-instagram"></i></Link>
               <Link to="./YouTube"><i className="fa-brands fa-youtube"></i></Link>
               <Link to="./Pinterest"><i className="fa-brands fa-pinterest"></i></Link>
            </div>
            <div className="footer-privacy">
               <Link to="./privacy" className="privacy">Privacy Policy</Link>
               <Link to="./terms">Terms of Use</Link>
            </div>
            <div className="footer-copyright">
               <h1>Copyright @ 2022 All Rights Reserved</h1>
            </div>
         </div>
      </footer>
   )
}