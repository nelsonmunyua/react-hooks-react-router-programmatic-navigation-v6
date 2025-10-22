// components/NavBar.js
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      {/* Logout triggers logout() from App.js */}
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default NavBar;