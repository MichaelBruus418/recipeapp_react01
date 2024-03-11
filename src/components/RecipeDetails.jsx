import styles from "./css/recipeDetails.module.css";
import { useEffect, useState } from "react";
import { spoonacular } from "../config.json";
import RecipeInstructions from "./RecipeInstructions";
import RecipeIngredients from "./RecipeIngredients";
import RecipeAbstract from "./RecipeAbstract";

export default function RecipeDetails({ recipeId }) {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URI = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const API_KEY = spoonacular.apiKey;
  console.log(URI);

  useEffect(() => {
    async function fetchRecipe() {
      const resp = await fetch(`${URI}?apiKey=${API_KEY}`);
      const data = await resp.json();
      setRecipe(data);
      setIsLoading(false);
      console.log(data);
    }

    fetchRecipe();
  }, [recipeId]);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsContent}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>{recipe.title}</h1>
            <img
              width="556"
              height="370"
              src={recipe.image}
              className={styles.image}
              alt={recipe.title}
            />
            <RecipeAbstract recipe={recipe} />
            <RecipeIngredients recipe={recipe} />
            <RecipeInstructions recipe={recipe} />
          </>
        )}
      </div>
    </div>
  );
}
