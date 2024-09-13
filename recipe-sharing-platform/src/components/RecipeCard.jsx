const RecipeCard = ({ recipe }) => {
    return (
      <div className="shadow-md rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{recipe.title}</h3>
          <p className="text-gray-700">{recipe.summary}</p>
          <a href={`/recipes/${recipe.id}`} className="text-indigo-500 hover:text-indigo-700">
            View Recipe
          </a>
        </div>
      </div>
    );
  };
  
  export default RecipeCard;