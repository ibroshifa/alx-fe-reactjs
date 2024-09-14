import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
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
         <div className='flex flex-row'> <h1 className="text-3xl font-bold mb-8">Recipes</h1>
         
<Link to={`/add`} className="px-5 mx-10 h-10 flex flex-row items-center rounded-xl bg-orange-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-300 dark:active:bg-orange-200">
          Add Recipe
          </Link>
          </div>
          <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <Link to={`/recipe/${recipe.id}`} className="text-indigo-500 hover:text-indigo-700">
          View Recipe
          </Link>
          
        </div>
      </div>
    );
  };
  
  export default HomePage;