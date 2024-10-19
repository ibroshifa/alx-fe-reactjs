import React from 'react';
import { useNavigate } from 'react-router-dom';
const QuestionResultList = ({ questions, userAnswers, results, score,onRetakeExam  }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
      navigate(`/quiz?category=${selectedCategory}&difficulty=${difficulty}&count=${questionCount}&categoryName=${categoryName}`);
    };
  return (
    <div className="mt-12 bg-white p-6 rounded shadow-md w-3/4 mx-auto ">
      {/* Score Header */}
     
      <div className="flex justify-between items-center mb-6">
  <button
    onClick={onRetakeExam}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Retake Exam 
  </button>
  <h2 className="text-2xl font-semibold text-gray-800 text-center flex-1">
    Your Score: {score} / {questions.length}
  </h2>
</div>

      
      {/* Scrollable List */}
      <div className="max-h-[28rem] overflow-y-auto space-y-4">
        <ul className="space-y-4">
          {questions.map((question, index) => (
            <li key={index} className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="font-medium text-gray-800">
                Question {index + 1}: {question.question}
              </h3>
              <p className="mt-2">
                <span className="font-bold">Your Answer: </span>
                <span
                  className={`${
                    results[index] ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {userAnswers[index]?.selectedAnswer || 'Not answered'}
                </span>
              </p>
              {!results[index] && (
                <p className="text-red-500 mt-2">
                  Correct Answer: {question.correct_answer}
                </p>
              )}
              <p
                className={`mt-2 ${
                  results[index] ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {results[index] ? 'Correct' : 'Incorrect'}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionResultList;
