import "./HamburgerMenu.css";
import NavLoggedIn from "../NavLoggedIn/NavLoggedIn";
import NavLoggedOut from "../NavLoggedOut/NavLoggedOut";

function HamburgerMenu({ isLoggedIn, onClose, handleLoginClick, isInverse }) {
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
        {!isLoggedIn ? (
          <NavLoggedOut handleLoginClick={handleLoginClick} />
        ) : (
          <NavLoggedIn isInverse={isInverse} />
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
