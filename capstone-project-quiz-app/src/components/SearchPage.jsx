// SearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false); // Track if the user has searched

  // Fetching all quiz questions (limit 100)
  useEffect(() => {
    if (searched) {
      const fetchQuestions = async () => {
        setLoading(true);
        setError('');
        try {
            // fetch all questions because the triva didnt have api for searching
          const response = await axios.get(
            `https://opentdb.com/api.php?amount=4000`
          );
          setQuestions(response.data.results);
          // Filter based on search query after fetching
          const filtered = response.data.results.filter((question) =>
            question.question.toLowerCase().includes(searchQuery.toLowerCase())

          );
          setFilteredQuestions(filtered);
          setError('')
        } catch (err) {
          setError('Failed to fetch questions. Please try again.');
        } finally {
          setLoading(false);
        }
      };

      fetchQuestions();
    }
  }, [searched, searchQuery]);

  // Handle search button click
  const handleSearch = () => {
    setSearched(true); // Trigger the search
  };

  // Handle search input change
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-start py-12 mt-20 w-3/4 mx-20">
      <div className="w-3/4">
        {/* Search Bar */}
        <input
          type="text"
          className="border border-gray-300 p-3 rounded-lg w-full"
          placeholder="Enter keyword to search for questions..."
          value={searchQuery}
          onChange={handleSearchInput}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Display loading message */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}

      {/* Display error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display filtered questions after search */}
      <div className="w-3/4 mt-4">
        {searched && !loading && filteredQuestions.length > 0 && error=='' ? (
          filteredQuestions.map((question, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow-md mb-4">
              <h2 className="font-semibold text-lg mb-4">
                {decodeURIComponent(question.question)}
              </h2>
              <ul>
                {question.incorrect_answers.concat(question.correct_answer).map((answer, idx) => (
                  <li key={idx} className="my-2 p-2 bg-white border rounded">
                    {decodeURIComponent(answer)}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          searched && !loading && (
            <p className="text-gray-600 text-center">No questions match the search query.</p>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
