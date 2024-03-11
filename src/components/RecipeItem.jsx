import styles from "./css/recipeItem.module.css";

export default function RecipeItem({ item, setRecipeId }) {
  const handleClick = () => {
    setRecipeId(item.id);
  };

  return (
    <div className={styles.recipeItem} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img
          width="312px"
          height="231px"
          className={styles.recipeImage}
          src={item.image}
          alt={item.title}
        />
      </div>
      <h2 className={styles.recipeHeading}>{item.title}</h2>
    </div>
  );
}
