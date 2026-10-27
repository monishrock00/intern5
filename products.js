export const products = [
  { id: 1, name: 'Studio Headphones', category: 'Electronics', price: 129, rating: 4.7, image: '/images/p1.svg', description: 'Closed-back headphones with a flat, honest sound and 40-hour battery life.' },
  { id: 2, name: 'Trail Smartwatch', category: 'Electronics', price: 199, rating: 4.5, image: '/images/p2.svg', description: 'GPS, heart-rate tracking and a week of battery in a scratch-resistant case.' },
  { id: 3, name: 'Daypack 22L', category: 'Fashion', price: 74, rating: 4.6, image: '/images/p3.svg', description: 'Water-resistant daypack with a padded laptop sleeve and hidden pocket.' },
  { id: 4, name: 'Cloudstep Sneakers', category: 'Fashion', price: 98, rating: 4.4, image: '/images/p4.svg', description: 'Lightweight everyday sneakers with a recycled-foam sole.' },
  { id: 5, name: 'Pour-Over Coffee Maker', category: 'Home', price: 45, rating: 4.8, image: '/images/p5.svg', description: 'Borosilicate glass carafe with a reusable steel filter. Brews 4 cups.' },
  { id: 6, name: 'Arc Desk Lamp', category: 'Home', price: 59, rating: 4.3, image: '/images/p6.svg', description: 'Dimmable LED lamp with three colour temperatures and a USB charging port.' },
  { id: 7, name: 'Polarized Sunglasses', category: 'Fashion', price: 66, rating: 4.2, image: '/images/p7.svg', description: 'Polarized lenses with UV400 protection in a flexible frame.' },
  { id: 8, name: 'Mechanical Keyboard', category: 'Electronics', price: 109, rating: 4.9, image: '/images/p8.svg', description: 'Hot-swappable switches, aluminium case and wireless or wired use.' },
];

export const categories = ['All', ...new Set(products.map((p) => p.category))];
export const money = (n) => `$${n.toFixed(2)}`;
