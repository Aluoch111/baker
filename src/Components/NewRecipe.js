import { useState } from "react";
// import { useHistory } from "react-router-dom";

const NewRecipe = () => {
  const [name, setName] = useState('');
  const [directions, setDirections] = useState('');
  const [cooktime, setCooktime] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { name, directions, cooktime };

    fetch('https://bakers-delight.herokuapp.com/recipes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe)
    }).then(() => {
    //   history.push('/');
    })
  }

  return (
    <div className="create">
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
          <option value="mario">under 40  mins</option>
          <option value="yoshi">over 50 mins</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default NewRecipe;