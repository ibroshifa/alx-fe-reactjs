import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{marginInline:'30px',marginBlock:'20px',display:'flex',width:'700px'}}>
      <Link to="/">Recipe List</Link>
      <div style={{paddingInline:"20px"}}></div>
      <Link to="/add-recipe">Add Recipe</Link>
      <div style={{paddingInline:"20px"}}></div>
      <Link to="/favorites">Favorites</Link>
      <div style={{paddingInline:"20px"}}></div>
      <Link to="/recomendations">Recomendations</Link>
    </nav>
  );
};

export default Navbar;