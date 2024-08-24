import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore  from './recipeStore';

const DeleteRecipe = () => {
  const { recipeId } = useParams();
  const { deleteRecipe } = useRecipeStore();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to recipe list after deletion
  };

  return (
    <div>
      <h2>Are you sure you want to delete this recipe?</h2>
      <button onClick={handleDelete}>Confirm Delete</button>
      <button onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
};

export default DeleteRecipe;