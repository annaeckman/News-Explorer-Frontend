import "./HamburgerMenu.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function HamburgerMenu({
  isLoggedIn,
  onClose,
  handleLoginClick,
  handleLogout,
  isInverse,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const signoutBtnClass = !isInverse
    ? "nav__signout-btn nav__signout-btn--white"
    : "nav__signout-btn";

  return (
    <div className="hamburger-menu">
      <div className="hamburger-menu__top">
        <p className="hamburger-menu__logo">NewsExplorer</p>
        <button
          className="hamburger-menu__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>

      <div className="hamburger-menu__links">
        {isLoggedIn ? (
          <>
            <ul className="hamburger-menu__list">
              <li className="hamburger-menu-item">
                <Link
                  to="/"
                  className="hamburger-menu__link hamburger-menu__link_loggedin"
                >
                  Home
                </Link>
              </li>
              <li className="hamburger-menu-item">
                <Link
                  to="/saved-news"
                  className="hamburger-menu__link hamburger-menu__link_loggedin"
                >
                  Saved Articles
                </Link>
              </li>
            </ul>
            <div className="hamburger-menu__signout-div">
              <p className="hamburger-menu-signout-name">
                Elise{currentUser?.name}
              </p>
              <button
                onClick={handleLogout}
                className={signoutBtnClass}
              ></button>
            </div>
          </>
        ) : (
          <>
            <ul className="hamburger-menu__list">
              <li className="hamburger-menu-item">
                <Link to="/" className="hamburger-menu__link">
                  Home
                </Link>
              </li>
            </ul>
            <button
              onClick={handleLoginClick}
              className="hamburger-menu__signin-btn"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
