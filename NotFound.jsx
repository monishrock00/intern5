import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p>The page you asked for doesn't exist.</p>
      <Link to="/">Go to the home page</Link>
    </>
  );
}
