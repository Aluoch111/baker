import React, { useState } from "react";
 

function NewRecipe () {
  const [name, setName] = useState('');
  const [directions, setDirections] = useState('');
  const [cooktime, setCooktime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { name, directions, cooktime };

    fetch('https://bakers-delight.herokuapp.com/recipes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe)
    }).then(() => {
     console.log(recipe)
    })
  }

  return (
    <div className="recipe">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Dessert name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Directions:</label>
        <textarea
          required
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
        ></textarea>
        <label>Cooktime:</label>
        <select
          value={cooktime}
          onChange={(e) => setCooktime(e.target.value)}
        >
          <option value="">40 mins</option>
          <option value="">50 mins</option>
          <option value="">30 mins</option>
          <option value="">20 mins</option>
          
        </select>
        <button onClick={handleSubmit} >Add Recipe</button>
      </form>
      
    </div>
  );
}
 
export default NewRecipe;