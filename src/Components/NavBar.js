
  import React, { useEffect } from "react";

  export default function NavBar(){
     
  useEffect(() => {
   fetch("https://bakers-delight.herokuapp.com/recipes")
 
   .then((res) => res.json())
   .then( data => console.log(data));
  } ,[] )
     return (
         
             <div>
                 <ul>
                     <li>Home</li>
                     <li>Recipe</li>
                     <li>Add yours</li>
                     <li>Login</li>
                 </ul>
             </div>
          
     );
 }