import styles from "./recipeItem.module.css";

export default function RecipeItem({ item }) {
  const handleClick = () => {
    console.log("ID: " + item.id);
  };

  return (
    <div>
      <h2>{item.title}</h2>;
      <img
        className={styles.image}
        src={item.image}
        alt={item.title}
        onClick={handleClick}
      />
    </div>
  );
}
