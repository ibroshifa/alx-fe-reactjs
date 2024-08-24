import useRecipeStore  from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const RecipeList = () => {
  const { recipes, filteredRecipes,searchTerm } = useRecipeStore();
  const searhTerm = useRecipeStore(state=>state.searchTerm);

  return (
    <div>
      <SearchBar />
      {searhTerm !='' ? (
        <div>
         {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          <Link to={`/recipes/${recipe.id}/delete`}>Delete</Link>
        </div>
      ))}
        </div>
      ) : (
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
      )}
      
    </div>
  );
};

export default RecipeList;