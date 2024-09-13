import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      const fetchRecipe = async () => {
        const response = await fetch('../src/data.json');
        const data = await response.json();
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      };
  
      fetchRecipe();
    }, [id]);
  
    return (
        <div className="lg:w-4/3 px-4 py-4">
          {recipe && (
            <div className=''>
              <h1 className="text-3xl font-bold mb-4 mx-auto lg:w-3/4 md:w-3/4">{recipe.title}</h1>
              <img width={300} src={recipe.image} alt={recipe.title} className="mx-auto lg:mx-50 rounded-lg mb-4" /> {/* Adjusted image width and added mx-auto for centering */}
              <h2 className="text-2xl font-medium mb-2 mx-20 lg:w-2/3 md:w-2/3">Ingredients</h2>
              <ul className="list-disc pl-4 lg:w-1/2 lg:w-2/3 md:w-2/3 mx-20"> {/* Added list-disc class for bullet points */}
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-medium mb-2 lg:w-2/3 md:w-2/3 mx-20">Instructions</h2>
              <ol className="list-decimal pl-4 lg:w-2/3 md:w-2/3 mx-20"> {/* Added list-decimal class for numbered list */}
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      );
    };
  
  export default RecipeDetail;