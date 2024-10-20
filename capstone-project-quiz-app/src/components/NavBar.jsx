import { NavLink } from 'react-router-dom';
import { FaHome, FaHistory, FaSearch } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg p-4 flex justify-center space-x-8 rounded-b-lg">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-white text-lg font-semibold hover:text-blue-300 flex items-center space-x-2 ${isActive ? 'border-b-2 border-white' : ''}`
          }
        >
          <FaHome /> <span>Home</span>
        </NavLink>
        <NavLink 
          to="/quizHistory" 
           //an arrow function Dynamically applies classes based on the active state of the link
          className={({ isActive }) => 
            `text-white text-lg font-semibold hover:text-blue-300 flex items-center space-x-2 ${isActive ? 'border-b-2 border-white' : ''}`
          }
        >
          <FaHistory /> <span>Quiz History</span>
        </NavLink>
        <NavLink 
          to="/quizSearch" 
          className={({ isActive }) => 
            `text-white text-lg font-semibold hover:text-blue-300 flex items-center space-x-2 ${isActive ? 'border-b-2 border-white' : ''}`
          }
        >
          <FaSearch /> <span>Quiz Search</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
