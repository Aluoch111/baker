import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import NewRecipe from "./Components/NewRecipe";
import RecipeDetails from "./Components/RecipeDetails";
import PageNotFound from "./Components/PageNotFound";
import {  Route, Routes } from 'react-router-dom';



export default function App() {

  return (

    <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path="/navbar" element = {<NavBar/>}/>
        <Route path= "/newrecipe" element = { <NewRecipe/>}/>
        <Route path ="/recipes/:id" element ={ <RecipeDetails/>}/>
        <Route path ="/pagenotfound" element ={ <PageNotFound/>}/>
    </Routes>

  );
};


