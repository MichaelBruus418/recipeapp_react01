import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipeData }) {
  return (
    <div>
      {recipeData.map((item) => (
        <div key={item.id}>
          <RecipeItem item={item} />
        </div>
      ))}
    </div>
  );
}
