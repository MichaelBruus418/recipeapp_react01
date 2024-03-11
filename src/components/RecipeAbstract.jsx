import styles from "./css/recipeDetails.module.css";

export default function RecipeAbstract({ recipe }) {
  return (
    <div className={styles.abstract}>
      <span>⏱ Ready in {recipe.readyInMinutes} minutes</span>
      <span> &#x2022; </span>
      <span>{recipe.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</span>
    </div>
  );
}
