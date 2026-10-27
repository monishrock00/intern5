import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext(null);
const KEY = 'shopsphere-cart';

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
}

function reducer(items, action) {
  switch (action.type) {
    case 'add': {
      const found = items.find((i) => i.id === action.id);
      return found
        ? items.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i))
        : [...items, { id: action.id, qty: 1 }];
    }
    case 'set':
      return items.map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i)).filter((i) => i.qty > 0);
    case 'remove':
      return items.filter((i) => i.id !== action.id);
    case 'clear':
      return [];
    default:
      return items;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], load);
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* storage unavailable */ }
  }, [items]);
  const count = items.reduce((n, i) => n + i.qty, 0);
  return <CartContext.Provider value={{ items, count, dispatch }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
