import Recipes from "./Components/Recipes";
import useFetch from "./useFetch";

Function Home (){

  const { error, isPending, data: blogs } = useFetch('https://bakers-delight.herokuapp.com/recipes ')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <Recipes recipes={recipes} /> }
    </div>
  );
}
 
export default Home;