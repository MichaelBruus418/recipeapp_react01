import RecipeItem from "./RecipeItem";
import styles from "./css/recipeList.module.css";

export default function RecipeList({ recipeData, setRecipeId }) {
  return (
    <div className={styles.listContainer}>
      {recipeData.map((item) => (
        <div key={item.id}>
          <RecipeItem item={item} setRecipeId={setRecipeId} />
        </div>
      ))}
    </div>
  );
}
