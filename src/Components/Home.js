import RecipeList from "./RecipeList";
import NavBar from "./NavBar";
import useFetch from "./Fetch";

function Home(){ 
    const { error, isPending, data: recipes } = useFetch('https://bakers-delight.herokuapp.com/recipes ');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { recipes && <RecipeList recipes={recipes} /> }
    </div>
  );
};
 
export default Home;