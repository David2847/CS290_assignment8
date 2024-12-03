import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Order</Link>
      <Link to="/contact">Registration</Link>
    </nav>
  );
}

export default Navigation;