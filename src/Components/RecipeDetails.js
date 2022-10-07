import React ,{ useHistory, useParams , useFetch } from "react";


function RecipeDetails (){
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch('https://bakers-delight.herokuapp.com/recipes/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://bakers-delight.herokuapp.com/recipes/' + recipe.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="recipe-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { recipe && (
        <article>
          <h2>{ recipe.name }</h2>
          <p>cooktime { recipe.cooktime }</p>
          <div>{ recipe.directions }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default RecipeDetails;