import "../Nav/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__not-logged-in">
        <p className="nav__home-text">Home</p>
        <button className="nav__sign-in">Sign in</button>
      </div>
      <div className="nav__logged-in"></div>
    </nav>
  );
}

export default Nav;

// use the isLoggedIn state to figure out if the user is logged in,
// put in some logic to display correct div element based on the logged in state
// toggle between nav__not-logged-in and nav_logged-in
