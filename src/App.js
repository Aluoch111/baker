import NavBar from "./Components/NavBar";
import NewRecipe from "./Components/NewRecipe";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
function App() {
  return (
    <Routes>
      <Route path ="/" element = { <Home/>}/>
      <Route path= "/navbar" element = {<NavBar/>}/>
      <Route path= "/newRecipe" element = { <NewRecipe/>}/>
      {/* <Route/>
      <Route/>
      <Route/>
      <Route/> */}
    </Routes>
    // <div className="App">
    //   
    //  
    // </div>
  );
}

export default App;
