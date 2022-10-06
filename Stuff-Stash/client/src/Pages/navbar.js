import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="mx-auto">
        <div className="p-2 d-inline-flex">
          <Link to="/">Home</Link>
        </div>
        <div className="p-2 d-inline-flex ">
          <Link to="/list">List of Users</Link>
        </div>
        <div className="p-2 d-inline-flex ">
          <Link to="/login">Login In Here!</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
