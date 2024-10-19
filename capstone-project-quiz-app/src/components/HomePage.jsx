
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = ()=>{
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categoryName, setSelectedCategoryName] = useState('none');
    const [difficulty, setDifficulty] = useState('easy');
    const [questionCount, setQuestionCount] = useState(5);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz?category=${selectedCategory}&difficulty=${difficulty}&count=${questionCount}&categoryName=${categoryName}`);
      };
     // Fetching categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://opentdb.com/api_category.php');
      setCategories(response.data.trivia_categories);
    };
    fetchCategories();
  }, []); 
return (
    <>
{/* Quiz Configuration */}

<div className="bg-white p-6 rounded shadow-md w-full max-w-lg mb-6">
<div className="mb-4">
  <label className="block text-gray-700">Select Category:</label>
  <select
  className="mt-2 w-full p-2 border border-gray-300 rounded"
  value={selectedCategory}
  onChange={(e) => {
    const selectedId = e.target.value; // Get the selected category ID
    const selectedCategoryObj = categories.find(category => category.id === parseInt(selectedId)); // Find the category object
    setSelectedCategoryName(selectedCategoryObj.name); // Set the category name
    setSelectedCategory(selectedId); // Set the category ID
  }}
>
  <option value="">Choose Category</option>
  {categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ))}
</select>

</div>

<div className="mb-4">
  <label className="block text-gray-700">Select Difficulty:</label>
  <select
    className="mt-2 w-full p-2 border border-gray-300 rounded"
    value={difficulty}
    onChange={(e) => setDifficulty(e.target.value)}
  >
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
  </select>
</div>

<div className="mb-4">
  <label className="block text-gray-700">Number of Questions:</label>
  <input
    type="number"
    className="mt-2 w-full p-2 border border-gray-300 rounded"
    value={questionCount}
    onChange={(e) => setQuestionCount(e.target.value)}
  />
</div>
<div className='flex justify-content:ce'>
<button
   onClick={handleNavigate}
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
  Start Quiz
</button>
</div>
</div>
</>    
)
}
export default HomePage