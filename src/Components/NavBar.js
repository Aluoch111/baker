 import { Link } from "react-router-dom";
// import NewRecipe from "./NewRecipe";
 import React  from  "react";
 
 function NavBar () {

   return (

     <nav className="navbar">
       <h1>Baker's Delight</h1>
       <div className="links">
         <Link to="/">Home</Link>
         <Link to="/newrecipe" style={{ 
           color: 'white', 
           backgroundColor: '#f1356d',
           borderRadius: '8px' 
         }}>New Recipe</Link>
        
        
       </div>
     </nav>
   );
 }
  
 export default NavBar;