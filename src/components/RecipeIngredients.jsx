import RecipeDetails from "./RecipeDetails";
import styles from "./css/recipeDetails.module.css";

export default function RecipeIngredients({ recipe }) {
  return (
    <div className={styles.ingredients}>
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((item) => (
          <li key={item.original}>{item.original}</li>
        ))}
      </ul>
    </div>
  );
}
