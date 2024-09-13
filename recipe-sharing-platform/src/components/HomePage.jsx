import React, { useState, useEffect } from 'react';
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe}   />
            ))}
          </div>
        </div>
      );
    };
  
  


  const RecipeCard = ({ recipe }) => {
    return (
      <div className="shadow hover:shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{recipe.title}</h3>
          <p className="text-gray-700">{recipe.summary}</p>
          <a href={`/recipe/${recipe.id}`} className="text-indigo-500 hover:text-indigo-700">
            View Recipe
          </a>
        </div>
      </div>
    );
  };
  
  export default HomePage;