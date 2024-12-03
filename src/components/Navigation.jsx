import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
        <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/order">Order</Link></li>
            <li className="nav-item"><Link to="/registration">Registration</Link></li>
        </ul>
    </nav>
  );
}

export default Navigation;