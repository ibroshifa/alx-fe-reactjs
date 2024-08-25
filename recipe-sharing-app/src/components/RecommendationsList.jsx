import useRecipeStore from './recipeStore';
import { useEffect } from 'react';
const RecommendationsList = () => {
     const {generateRecommendations} = useRecipeStore();
    const {recommendations} = useRecipeStore();
    // Call generateRecommendations on component mount (initializing the route)
  useEffect(() => {
    generateRecommendations(); // Trigger generation on component mount
  }, [generateRecommendations]); // Dependency array ensures only one call

    return (
      <div>
        <h2>Recommendations for You</h2>
        {recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecommendationsList;