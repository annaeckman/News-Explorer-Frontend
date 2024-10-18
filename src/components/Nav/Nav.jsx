import "../Nav/Nav.css";
import NavLoggedIn from "../NavLoggedIn/NavLoggedIn";
import NavLoggedOut from "../NavLoggedOut/NavLoggedOut";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";

function Nav({ handleLoginClick, isInverse, isLoggedIn, handleLogout }) {
  const [isClicked, setIsClicked] = useState(false);
  //build handler for hamburger button
  //build ham menu in nav

  const handleHamburgerClick = () => {
    setIsClicked(true);
  };

  const handleHamburgerCloseClick = () => {
    setIsClicked(false);
  };

  return (
    <nav className="nav" data-theme={isInverse ? "light" : "dark"}>
      <p className="nav__logo">NewsExplorer</p>
      <button
        onClick={handleHamburgerClick}
        className={
          isInverse ? "nav__menu-btn nav__menu-btn--black" : "nav__menu-btn"
        }
      ></button>

      {!isLoggedIn ? (
        <NavLoggedOut handleLoginClick={handleLoginClick} />
      ) : (
        <NavLoggedIn isInverse={isInverse} handleLogout={handleLogout} />
      )}
      {isClicked ? (
        <HamburgerMenu
          isLoggedIn={isLoggedIn}
          onClose={handleHamburgerCloseClick}
          handleLoginClick={handleLoginClick}
          handleLogout={handleLogout}
        />
      ) : null}
    </nav>
  );
}

export default Nav;

// Stil to do:
// add onClick to signout button
// add the little bar that follows the border, depending on what page you're on
