import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleIngredientChange = (e) => {
    const newIngredients = e.target.value.split('\n'); // Split by newline for multiple ingredients
    setIngredientsList(newIngredients);
  };

  const handleInstructionChange = (e) => {
    const newInstructions = e.target.value.split('\n');
    setSteps(newInstructions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
// Validate form data here
if (!title || !ingredients || !instructions) {
    alert('Please fill in all fields.');
    return;
  }

  const newRecipe = {
    title,
    ingredients: ingredientsList,
    instructions: steps
  };

  
  fetch('/api/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRecipe)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Recipe   added successfully:', data);
    // Handle success, e.g., redirect to a list of recipes
  })
  .catch(error => {
    console.error('Error adding recipe:', error);
    // Handle error, e.g., display an error message
  });
};
  return (
    <div className=''>
    <div  className="md:w-3/4 lg:w-1/2 mx-auto px-40 py-16  mt-10 bg-gray-100 shadow hover:shadow-lg rounded-lg ">
    <form onSubmit={handleSubmit}>
    
      <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"   

            id="title"
            className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div> 
        <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
            Ingredients
          </label>
      <textarea
        id="ingredients"
       rows="4" className="w-full block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Write your thoughts here..."
        value={ingredientsList.join('\n')}
        onChange={handleIngredientChange}
        required
      />
      <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
            Steps
          </label>
        <textarea
        id="steps"
        rows="4" className="w-full block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Write your thoughts here..."
        value={steps.join('\n')}
        onChange={handleInstructionChange}
        required
      />
      <button
          type="submit"
          className="my-10 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
        >
          Add new Receip
        </button>
  
    </form>  </div></div>
  );
};

export default AddRecipeForm;