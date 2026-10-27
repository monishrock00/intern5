import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { products, categories } from '../data/products.js';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const category = params.get('category') || 'All';
  const sort = params.get('sort') || 'featured';

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value && value !== 'All' && value !== 'featured') next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const list = useMemo(() => {
    let out = products.filter(
      (p) => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(q.toLowerCase())
    );
    if (sort === 'price-asc') out = [...out].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') out = [...out].sort((a, b) => b.price - a.price);
    if (sort === 'rating') out = [...out].sort((a, b) => b.rating - a.rating);
    return out;
  }, [q, category, sort]);

  return (
    <>
      <h1>Products</h1>
      <div className="filters">
        <input type="search" placeholder="Search products" aria-label="Search products" value={q} onChange={(e) => update('q', e.target.value)} />
        <select aria-label="Category" value={category} onChange={(e) => update('category', e.target.value)}>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select aria-label="Sort" value={sort} onChange={(e) => update('sort', e.target.value)}>
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>
      {list.length ? (
        <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      ) : (
        <p className="muted">No products match your search. Try a different keyword or category.</p>
      )}
    </>
  );
}
