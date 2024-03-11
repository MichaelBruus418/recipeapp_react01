import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import globalCSS from "./app.css";
import globalHeadings from "./components/css/headings.css";
// import globalDefault from "./appDefault.css";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipeResults, setRecipeResults] = useState([]);
  const [recipeId, setRecipeId] = useState("656329");

  return (
    <div className="App">
      <Nav />
      <Search
        recipeResults={recipeResults}
        setRecipeResults={setRecipeResults}
      />
      <Container>
        <InnerContainer>
          <RecipeList recipeData={recipeResults} setRecipeId={setRecipeId} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails recipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
