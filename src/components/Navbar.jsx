import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <div className="col-1">
        <li>Bookstore CMS</li>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </div>
      <li>Icon</li>
    </ul>
  </nav>
);

export default Navbar;
