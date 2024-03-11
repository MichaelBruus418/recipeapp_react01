import { useEffect, useState } from "react";
import { spoonacular } from "../config.json";
import styles from "./css/search.module.css";
import global from "./css/global.module.css";

// Search options:
// https://spoonacular.com/food-api/docs#Search-Recipes-Complex
const URI = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = spoonacular.apiKey;

// Diet options:
// https://spoonacular.com/food-api/docs#Diets
const DIETS = [
  "All",
  "Gluten Free",
  "Ketogenic",
  "Vegetarian",
  "Lacto-Vegetarian",
  "Ovo-Vegetarian",
  "Vegan",
  "Pescetarian",
  "Paleo",
  "Primal",
  "Low FODMAP",
  "Whole30",
];

export default function Search({ recipeResults, setRecipeResults }) {
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState(DIETS[0]);

  useEffect(() => {
    async function searchRecipes() {
      const queries = [`query=${query}`, `diet=${diet}`];
      const url = `${URI}?${queries.join("&")}&apiKey=${API_KEY}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setRecipeResults(data.results);
    }

    searchRecipes();
  }, [query, diet]);

  return (
    <div className={`${styles.container} ${global.maxWidth}`}>
      <input
        value={query}
        type="text"
        placeholder="Enter food type"
        className={styles.inputSearch}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.dietContainer}>
        <label className={styles.dietLabel} htmlFor="diets">
          Diet:
        </label>
        <select
          id="diets"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        >
          {DIETS.map((diet) => (
            <option key={diet} value={diet}>
              {diet}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
