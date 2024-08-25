import useRecipeStore  from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import { useParams } from 'react-router-dom';
const RecipeDetails = () => {
    const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id == recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const { updateRecipe, deleteRecipe } = useRecipeStore(state => ({
    updateRecipe: state.updateRecipe,
    deleteRecipe: state.deleteRecipe,
  }));

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* <EditRecipeForm recipe={recipe} onSubmit={updateRecipe} /> */}
      {/* <DeleteRecipeButton recipeId={recipeId} onDelete={deleteRecipe} /> */}
    </div>
  );
};

export default RecipeDetails;