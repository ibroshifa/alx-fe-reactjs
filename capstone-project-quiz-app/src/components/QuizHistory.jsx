import React, { useState, useEffect } from 'react';
import useLocalStorage from './UseLocalStorage';
const QuizHistory = () => {
    const [quizHistory, setQuizHistory] = useLocalStorage('quizHistory', []);
    const [averageScore, setAverageScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
  
    // Function to calculate performance
    const calculatePerformance = (quizHistory) => {
      if (quizHistory.length === 0) {
        setAverageScore(0);
        setBestScore(0);
        return;
      }
  
      const totalScore = quizHistory.reduce((sum, quiz) => sum + quiz.score, 0);
      const bestScore = Math.max(...quizHistory.map((quiz) => quiz.score));
      const averageScore = (totalScore / quizHistory.length).toFixed(2);
  
      setAverageScore(averageScore);
      setBestScore(bestScore);
    };
  
    // Calculate performance whenever quizHistory changes
    useEffect(() => {
      calculatePerformance(quizHistory);
    }, [quizHistory]);
  

  return (
    <div className="w-3/4 mt-20  bg-white h-[35rem]">
     
  <div className="flex items-center justify-between mb-4 mx-20 mt-8">
    <h2 className="text-2xl font-semibold">Quiz History</h2>
    <p className="text-lg">Average Score: {averageScore}</p>
    <p className="text-lg">Best Score: {bestScore}</p>
  </div>
      {quizHistory.length > 0 ? (
        <table className="table-auto w-5/6 bg-white shadow-md rounded mx-auto">
          <thead>
            <tr className="bg-gray-200">
             <th className=" py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-2 py-2 text-left">Category</th>
              <th className="px-2 py-2 text-left">Difficulty</th>
              <th className="px-2 py-2 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {quizHistory.slice().reverse().map((quiz, index) => (
              <tr key={index} className="border-t">
                <td className="px-2 py-2">{index+1}</td>
                <td className="px-4 py-2">{quiz.date} {quiz.time}</td>
                <td className="px-2 py-2">{quiz.category}</td>
                <td className="px-2 py-2">{quiz.difficulty}</td>
                <td className="px-2 py-2">{quiz.score} / {quiz.totalQuestions}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      ) : (
        <p>No quizzes taken yet.</p>
      )}
    </div>
  );
};

export default QuizHistory;
