# ShopSphere - Full-Stack Deployment & Project Architecture (Capstone)

An e-commerce product catalog built as a modular React single-page app.

## Features mapped to the task
| Requirement | Where |
|---|---|
| Modular frontend architecture | `src/components`, `src/pages`, `src/context`, `src/data` |
| Client-side routing | React Router in `src/App.jsx` (`/`, `/products`, `/products/:id`, `/cart`, 404) |
| Asset optimization | Minified + chunk-split build (`vite.config.js`), lazy-loaded routes, lightweight SVG images with `loading="lazy"`, hashed long-cache assets |
| Live deployment | `vercel.json`, `netlify.toml`, `render.yaml` (all include the SPA rewrite so deep links work) |

## Project structure
```
src/
  components/   Header, Footer, ProductCard
  pages/        Home, Products, ProductDetail, Cart, NotFound
  context/      CartContext (cart state, saved to localStorage)
  data/         products.js
public/images/  optimized SVG product images
```

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # test the production build
```

## Deploy
1. Push this folder to a GitHub repository.
2. **Vercel**: Import the repo at vercel.com/new. Framework: Vite. It reads `vercel.json`.
3. **Netlify**: "Add new site" > "Import from Git". It reads `netlify.toml` (build `npm run build`, publish `dist`).
4. **Render**: New > "Static Site". Build command `npm install && npm run build`, publish directory `dist`, and add a rewrite rule `/*` -> `/index.html` (or use `render.yaml` as a Blueprint).
5. Copy the public URL and submit it with your work.
