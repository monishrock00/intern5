import { Link, useParams } from 'react-router-dom';
import { products, money } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const p = products.find((x) => x.id === Number(id));

  if (!p) return <><h1>Product not found</h1><Link to="/products">Back to products</Link></>;

  return (
    <div className="detail">
      <img src={p.image} alt={p.name} width="400" height="400" />
      <div>
        <p className="muted">{p.category}</p>
        <h1>{p.name}</h1>
        <p>★ {p.rating} · <strong>{money(p.price)}</strong></p>
        <p>{p.description}</p>
        <button className="btn" onClick={() => dispatch({ type: 'add', id: p.id })}>Add to cart</button>{' '}
        <Link to="/products">Keep shopping</Link>
      </div>
    </div>
  );
}
