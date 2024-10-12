import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import logoutWhite from "../../assets/logout-white.png";
import logoutBlack from "../../assets/logout-black.png";

function Nav({ handleLoginClick }) {
  const isDarkBackground = false;
  const isLoggedIn = true;

  const logoClass = isDarkBackground ? "nav__logo--white" : "nav__logo--black";
  const signinBtnClass = isDarkBackground
    ? "nav__signin-btn nav__signin-btn--white"
    : "nav__signin-btn nav__signin-btn--black";
  const navLinkClass = isDarkBackground
    ? "nav__link nav__link--white"
    : "nav__link nav__link--black";
  const signoutDivClass = isDarkBackground
    ? "nav__signout-div nav__signout-div--white"
    : "nav__signout-div nav__signout-div--black";
  const signoutBtnClass = isDarkBackground
    ? "nav__signout-btn nav__signout-btn--white"
    : "nav__signout-btn nav__signout-btn-black";

  const isNotLoggedInNavMarkup = (
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link to="/" className={navLinkClass}>
          Home
        </Link>
      </li>
      <li>
        <button onClick={handleLoginClick} className={signinBtnClass}>
          Sign in
        </button>
      </li>
    </ul>
  );

  const isLoggedInNavMarkup = (
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link to="/" className={navLinkClass}>
          Home
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to="/" className={navLinkClass}>
          Saved Articles
        </Link>
      </li>
      <li className="nav__list-item">
        <div className={signoutDivClass}>
          <p className="nav__signout-name">Elise</p>
          <button className={signoutBtnClass}></button>
        </div>
      </li>
    </ul>
  );

  return (
    <nav className="nav">
      <p className={logoClass}>NewsExplorer</p>
      {!isLoggedIn ? isNotLoggedInNavMarkup : isLoggedInNavMarkup}
    </nav>
  );
}

export default Nav;

// for mobile, have classes that hide or show in media queries for mobile
