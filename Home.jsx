import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Good gear, fast delivery, no clutter.</h1>
        <p>Eight carefully chosen products across electronics, fashion and home.</p>
        <Link to="/products" className="btn">Browse all products</Link>
      </section>
      <h2>Top rated</h2>
      <div className="grid">
        {[...products].sort((a, b) => b.rating - a.rating).slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
