import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "120px 20px", textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found.</p>

      <Link to="/">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;