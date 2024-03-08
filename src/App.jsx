import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import global from "./app.css";
import Nav from "./components/Nav";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <RecipeList recipeData={recipeData} />
    </div>
  );
}

export default App;
