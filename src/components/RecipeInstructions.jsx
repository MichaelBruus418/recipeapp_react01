import pseudoUUID from "../utilities/pseudoUUID";
import styles from "./css/recipeDetails.module.css";

export default function RecipeInstructions({ recipe }) {
  return (
    <div className={styles.instructions}>
      <h3>Instructions</h3>
      <ol>
        {recipe.analyzedInstructions[0].steps.map((step) => (
          <li key={pseudoUUID(step.step)} className={styles.step}>
            {step.step}
          </li>
        ))}
      </ol>
    </div>
  );
}
