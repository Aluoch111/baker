import NavBar from "./Components/NavBar";
import NewRecipe from "./Components/NewRecipe";
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path= "/" element = {<NavBar/>}/>
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
