
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizHistory from './components/QuizHistory';
import SearchPage from './components/SearchPage';
const App = () => {

 

 

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 w-full bg-[url('/src/assets/quiz_background2.jpeg')]">
      {/* <h1 className="text-4xl font-bold mb-4">Quiz App</h1> */}
    
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/quizHistory" element={<QuizHistory />} />
      <Route path="/quizSearch" element={<SearchPage />} />
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
