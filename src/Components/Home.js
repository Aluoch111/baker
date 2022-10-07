import React from "react";
import { Link } from "react-router-dom";

export default function Home () {

return (
    <div>
    <h1>Hello</h1>
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
    </div>
  
)
}