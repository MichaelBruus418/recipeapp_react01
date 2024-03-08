import { useEffect, useState } from "react";
import styles from "./search.module.css";

export default function Search({ recipeData, setRecipeData }) {
  const [query, setQuery] = useState("Pizza");

  const URI = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "b286f34c8e2c49229c6d425b757816f7";

  useEffect(() => {
    async function fetchRecipe() {
      const url = `${URI}?query=${query}&apiKey=${API_KEY}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setRecipeData(data.results);
    }

    fetchRecipe();
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        value={query}
        type="text"
        placeholder="Enter food type"
        className={styles.inputSearch}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
