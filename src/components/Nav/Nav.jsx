import "../Nav/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <p className="nav__logo">NewsExplorer</p>
      <div className="nav__link-container">
        <Link to="/" className="nav__link">
          <p className="nav__home-text">Home</p>
        </Link>

        <button className="nav__signin-btn">Sign in</button>
      </div>
    </nav>
  );
}

export default Nav;

// use the isLoggedIn state to figure out if the user is logged in,
// put in some logic to display correct div element based on the logged in state
// toggle between nav__not-logged-in and nav_logged-in

//tool react fragment
//tag that's not a tag

//ternary operators inside the class names

//className={`nav__link ${lightMode? 'nav__link_light' : ''}`}

// for mobile, have classes that hide or show in media queries for mobile
