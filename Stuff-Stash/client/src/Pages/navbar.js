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
          <Link to="/reg">Register Here!</Link>
          <Link to="/login">Login In Here!</Link>
        </div>
        <div className="p-2 d-inline-flex ">
          <Link to="/org">Create Org here!</Link>
          <Link to="/renameorg">Rename Org here!</Link>
        </div>
     
      </div>
    </nav>
  );
};

export default Navbar;
