import { Link } from 'react-router-dom';
import { products, money } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { items, dispatch } = useCart();
  const lines = items.map((i) => ({ ...i, product: products.find((p) => p.id === i.id) })).filter((l) => l.product);
  const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);

  if (!lines.length) return <><h1>Your cart is empty</h1><Link to="/products" className="btn">Browse products</Link></>;

  return (
    <>
      <h1>Cart</h1>
      {lines.map(({ product, qty }) => (
        <div className="line" key={product.id}>
          <img src={product.image} alt="" width="64" height="64" />
          <span className="grow">{product.name}</span>
          <input type="number" min="1" aria-label={`Quantity for ${product.name}`} value={qty}
            onChange={(e) => dispatch({ type: 'set', id: product.id, qty: Number(e.target.value) })} />
          <strong>{money(product.price * qty)}</strong>
          <button className="btn small ghost" onClick={() => dispatch({ type: 'remove', id: product.id })}>Remove</button>
        </div>
      ))}
      <p className="total">Total: {money(total)}</p>
      <button className="btn" onClick={() => { alert('Demo checkout complete!'); dispatch({ type: 'clear' }); }}>Place order</button>
    </>
  );
}
