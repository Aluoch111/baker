 import { Link } from "react-router-dom";

 function NavBar () {

   return (

     <nav className="navbar">
       <h1>Baker's Delight</h1>
       <div className="links">
         <Link to="/">Home</Link>
         <Link to="/newRecipe" style={{ 
           color: 'white', 
           backgroundColor: '#f1356d',
           borderRadius: '8px' 
         }}>New Recipe</Link>
       </div>
     </nav>
   );
 }
  
 export default NavBar;