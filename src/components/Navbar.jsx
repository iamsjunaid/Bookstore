import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import { FaUser } from 'react-icons/fa6';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <div className="col-1">
        <li className="title-link">Bookstore CMS</li>
        <li>
          <Link to="/" className="subtitle-link">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="subtitle-link" id="categories">CATEGORIES</Link>
        </li>
      </div>
      <div className="oval">
        <FaUser style={{ color: '#0290ff' }} />
      </div>
    </ul>
  </nav>
);

export default Navbar;
