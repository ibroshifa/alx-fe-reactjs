import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionResultList from './QuestionResultList';
import axios from 'axios';
import useLocalStorage from './UseLocalStorage';
const QuizPage = ()=>{
    const [quizHistory, setQuizHistory] = useLocalStorage('quizHistory', []);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [results, setResults] = useState([]); // Track correct/incorrect results for each question
    const [quizCompleted, setQuizCompleted] = useState(false);
    

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const selectedCategory = searchParams.get('category');
  const categoryName = searchParams.get('categoryName');
  const difficulty = searchParams.get('difficulty');
  const questionCount = searchParams.get('count');

  // Fetching quiz questions based on user input
  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=${questionCount}&category=${selectedCategory}&difficulty=${difficulty}`
        );
       
        if (response.data.results.length === 0) {
          // No questions available
          alert("No quiz questions available for this category and difficulty.");
          return;
        }

        setQuestions(response.data.results);
        // calculatePerformance(response.data.results)
        setCurrentQuestionIndex(0); // Reset to the first question
        setScore(0); // Reset score when a new quiz starts
        setShowFeedback(false); // Hide feedback for new quiz
        setIsAnswerCorrect(null); // Reset answer correctness
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if(error.response?.status!=429){  /// ignore 429 (which is too many request it didn't prevent the get request)
            alert(`Request failed: ${error.response?.status} ${error.response?.statusText}`);
          }
          
        } else {
          alert('An unexpected error occurred. Please try again.');
        }
      }
      };
      fetchQuizQuestions()
  }, []); 


 

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    // Store user's selected answer
  setUserAnswers((prevAnswers) => [
    ...prevAnswers,
    { question: currentQuestion.question, selectedAnswer }
  ]);

  // Check if the answer is correct and store the result
  const isCorrect = selectedAnswer === currentQuestion.correct_answer;
  setResults((prevResults) => [...prevResults, isCorrect]);


    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer('');
    setIsAnswerCorrect(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const quizResult = {
        category: categoryName,
        difficulty: difficulty,
        score: score,
        totalQuestions: questions.length,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
      };
  
      // Update quiz history in local storage
      setQuizHistory([...quizHistory, quizResult]);
      // Show the question result list
      setQuizCompleted(true); // Track when the quiz is completed
    }
    // if (currentQuestionIndex < questions.length - 1) {
    //   setCurrentQuestionIndex(currentQuestionIndex + 1);
    // } else {
    //   alert(`Quiz completed! Your final score is ${score}/${questions.length}`);
    // }
  };

  // Helper function to decode HTML entities
const decodeHTMLEntities = (text) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

  const currentQuestion = questions[currentQuestionIndex];
  // Function to retake the quiz
  const retakeExam = () => {
    setCurrentQuestionIndex(0); // Reset to the first question
    setScore(0); // Reset score when a new quiz starts
    setShowFeedback(false); // Hide feedback for new quiz
    setIsAnswerCorrect(null); // Reset answer correctness
    setQuizCompleted(false);
    setResults([]);
  };
    return (<>
    {/* Quiz Question */}
    {!quizCompleted ?questions.length > 0 && (
        <div className='w-3/4 mt-20'>
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-lg w-full">
  <div className="text-lg font-semibold">
    Category: <span className="text-blue-600">{categoryName}</span>
  </div>
  <div className="text-lg font-semibold">
    Strength: <span className="text-blue-600">{difficulty}</span>
  </div>
  <div className="text-lg font-semibold">
    Score: <span className="text-green-600">{score}/{questions.length}</span>
  </div>
</div>


        <div className="bg-white p-6 rounded shadow-md w-full h-400">
            
          <h2 className="font-semibold text-lg mb-4">
            Question {currentQuestionIndex + 1}: {decodeHTMLEntities(currentQuestion.question)}
          </h2>

          <div className="mb-4">


            
            {currentQuestion.incorrect_answers
              .concat(currentQuestion.correct_answer)
              .sort() // Optional: Randomize answer order
              .map((answer, index) => (
                <div key={index} className="mb-2">
                <label className="inline-flex items-center w-full cursor-pointer bg-white/80 hover:bg-blue-50 rounded-lg border border-gray-300 p-3 transition-colors ease-in-out">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500 transition ease-in-out duration-300"
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />
                  <span className="ml-4 text-gray-800 font-medium">{decodeHTMLEntities(answer)}</span>
                </label>
              </div>
              
              ))}
          </div>

          {!showFeedback ? (
          <div className="flex justify-center">
            <button
              onClick={handleAnswerSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={!selectedAnswer}
            >
              Check Answer
            </button>
            </div>
          ) : (
            <div>
              <p className={`mt-4 ${isAnswerCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {isAnswerCorrect ? 'Correct!' : `Incorrect! The correct answer is ${currentQuestion.correct_answer}.`}
              </p>
           <div className="flex justify-end">
  <button
    onClick={handleNextQuestion}
    className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
  >
    Next Question
  </button>
</div>
            </div>
          )}

          {/* <p className="mt-4">Score: {score}/{questions.length}</p> */}
        </div>
        </div>
      ): (
        <QuestionResultList
          questions={questions}
          userAnswers={userAnswers}
          results={results}
          score={score}
          onRetakeExam={retakeExam}
        />
      )}
    </>
    )
}

export default QuizPage