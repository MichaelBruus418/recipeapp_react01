import styles from "./recipeItem.module.css";

export default function RecipeItem({ item }) {
  const handleClick = () => {
    console.log("ID: " + item.id);
  };

  return (
    <div className={styles.resultContainer} onClick={handleClick}>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
    </div>
  );
}
