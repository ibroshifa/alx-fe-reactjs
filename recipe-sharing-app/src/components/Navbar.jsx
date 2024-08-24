import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Recipe List</Link>
      <Link to="/add-recipe">Add Recipe</Link>
    </nav>
  );
};

export default Navbar;