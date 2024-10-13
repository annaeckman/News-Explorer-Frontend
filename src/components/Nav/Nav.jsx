import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import NavLoggedIn from "../NavLoggedIn/NavLoggedIn";
import NavLoggedOut from "../NavLoggedOut/NavLoggedOut";
import CurrentUserContext from "../../contexts/CurrentUserContext";

// pull out logged in nav as its own component and logged out nav

function Nav({ handleLoginClick, isInverse }) {
  const isLoggedIn = false;
  // how should i handle putting this above logic in??
  // add onClick to signout button
  // add the little bar that follows the border, depending on what page you're on

  return (
    <nav className="nav" data-theme={isInverse ? "light" : "dark"}>
      <p className="nav__logo">NewsExplorer</p>
      {!isLoggedIn ? (
        <NavLoggedOut handleLoginClick={handleLoginClick} />
      ) : (
        <NavLoggedIn isInverse={isInverse} />
      )}
    </nav>
  );
}

export default Nav;

// for mobile, have classes that hide or show in media queries for mobile
