import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import   Navbar from './components/Navbar'; // Assuming Navbar component exists
import DeleteRecipe from './components/DeleteRecipeButton';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipes/:recipeId/edit" element={<EditRecipeForm />} />
          <Route path="/recipes/:recipeId/delete" element={<DeleteRecipe />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recomendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;