import { useState } from 'react';
import useRecipeStore from './recipeStore'; // Assuming recipeStore is in the same directory
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const { updateRecipe } = useRecipeStore();
  const recipes = useRecipeStore(state => state.recipes); // Get all recipes

  // Find the recipe to edit based on recipeId
  const recipe = recipes.find(recipe => recipe.id === parseInt(recipeId)); // Ensure id conversion

  const [title, setTitle] = useState(recipe?.title || ''); // Pre-fill title
  const [description, setDescription] = useState(recipe?.description || ''); // Pre-fill description

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedRecipe = {
      id: parseInt(recipeId), // Ensure id is a number
      title,
      description,
    };

    updateRecipe(updatedRecipe); // Update the recipe in the store

    setTitle(''); // Clear form state after submission
    setDescription('');

    navigate('/'); // Navigate back to recipe list after editing
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}   

        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button   
 type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;