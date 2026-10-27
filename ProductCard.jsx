import { Link } from 'react-router-dom';
import { money } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  return (
    <article className="card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} width="400" height="400" loading="lazy" decoding="async" />
        <h3>{product.name}</h3>
      </Link>
      <p className="muted">{product.category} · ★ {product.rating}</p>
      <div className="row">
        <strong>{money(product.price)}</strong>
        <button className="btn small" onClick={() => dispatch({ type: 'add', id: product.id })}>Add to cart</button>
      </div>
    </article>
  );
}
