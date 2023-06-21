import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import { FaUser } from 'react-icons/fa'; // eslint-disable-line import/no-extraneous-dependencies

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
      <div className="oval">
        <FaUser style={{ color: '#0290ff' }} />
      </div>
    </ul>
  </nav>
);

export default Navbar;
