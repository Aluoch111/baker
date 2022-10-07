import { Link } from 'react-router-dom';

const Recipes = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipes => (
        <div className="blog-preview" key={recipes.id} >
          <Link to={`/recipes/${recipes.id}`}>
            <h2>{ recipes.name }</h2>
            <p>Method { recipes.directions }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Recipes;