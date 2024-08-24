import useRecipeStore  from './recipeStore';
import { Link } from 'react-router-dom';
const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          <Link to={`/recipes/${recipe.id}/delete`}>Delete</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;