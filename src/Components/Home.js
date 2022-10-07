import RecipesList from "RecipesList";
import { useFetch } from  "react";

function Home(){ 
    const { error, isPending, data: recipes } = useFetch('https://bakers-delight.herokuapp.com/recipes ');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { recipes && <RecipesList recipes={recipes} /> }
    </div>
  );
};
 
export default Home;