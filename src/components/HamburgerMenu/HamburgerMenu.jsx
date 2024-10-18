import "./HamburgerMenu.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function HamburgerMenu({ isLoggedIn, onClose, handleLoginClick, isInverse }) {
  const { currentUser } = useContext(CurrentUserContext);

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
          <ul className="hamburger-menu__list">
            <li className="hamburger-menu-item">
              <Link to="/" className="hamburger-menu__link">
                Home
              </Link>
            </li>
            <li className="hamburger-menu-item">
              <Link to="/saved-news" className="hamburger-menu__link">
                Saved Articles
              </Link>
            </li>
            <li className="hamburger-menu-item">
              <div className="hamburger-menu__signout-div">
                <p className="hamburger-menu-signout-name">
                  Elise{currentUser.name}
                </p>
                <button
                  onClick={handleLogout}
                  className={signoutBtnClass}
                ></button>
              </div>
            </li>
          </ul>
        ) : (
          <ul className="hamburger-menu__links">
            <li className="hamburger-menu-item">
              <Link to="/" className="hamburger-menu__link">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={handleLoginClick}
                className="hamburger-menu__signin-btn"
              >
                Sign in
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
