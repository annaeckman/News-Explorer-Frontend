import "../Nav/Nav.css";
import NavLoggedIn from "../NavLoggedIn/NavLoggedIn";
import NavLoggedOut from "../NavLoggedOut/NavLoggedOut";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Nav({ handleLoginClick, isInverse, handleHamburgerClick }) {
  const isLoggedIn = false;

  return (
    <nav className="nav" data-theme={isInverse ? "light" : "dark"}>
      <p className="nav__logo">NewsExplorer</p>
      <button
        onClick={handleHamburgerClick}
        className={isInverse ? "nav__menu-btn--black" : "nav__menu-btn"}
      ></button>
      {!isLoggedIn ? (
        <NavLoggedOut handleLoginClick={handleLoginClick} />
      ) : (
        <NavLoggedIn isInverse={isInverse} />
      )}
    </nav>
  );
}

export default Nav;

// Stil to do:
// for mobile, have classes that hide or show in media queries for mobile
// add onClick to signout button
// add the little bar that follows the border, depending on what page you're on
