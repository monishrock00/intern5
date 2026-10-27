import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Header() {
  const { count } = useCart();
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link to="/" className="logo">ShopSphere</Link>
        <nav aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart ({count})</NavLink>
        </nav>
      </div>
    </header>
  );
}
