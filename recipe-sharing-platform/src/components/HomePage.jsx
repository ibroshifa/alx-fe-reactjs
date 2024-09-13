import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('../src/data.json');
        const data = await response.json();
        setRecipes(data);
      };
  
      fetchData();
    }, []);
  
   
    return (
        <div className="container mx-auto px-4 pt-16">
          <h1 className="text-3xl font-bold mb-8">Recipes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe}   />
            ))}
          </div>
        </div>
      );
    };
  
  
  export default HomePage;