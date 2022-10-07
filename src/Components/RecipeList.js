import { Link } from 'react-router-dom';

function RecipesList ({ recipes }){
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div className="recipes" key={recipe.id} >
          <Link to={`/recipes/${recipe.id}`}>

            <h2>{ recipe.name }</h2>
            <br/>
            <p> <h3>Method</h3> { recipe.directions }</p>
            <br/>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default RecipesList;