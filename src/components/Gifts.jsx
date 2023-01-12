import { useEffect } from 'react'

export const Gifts = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   
   return (
      <div className="gifts-container">
         <h1>GIFTS</h1>
      </div>
   )
}
