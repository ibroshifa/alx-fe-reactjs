import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg p-4 flex justify-center space-x-8 rounded-b-lg">
        <Link to="/" className="text-white text-lg font-semibold hover:text-blue-300">Home</Link>
        <Link to="/quizHistory" className="text-white text-lg font-semibold hover:text-blue-300">Quiz History</Link>
        <Link to="/quizSearch" className="text-white text-lg font-semibold hover:text-blue-300">Quiz Search</Link>
      </nav>
    </div>
  );
};

export default NavBar;
