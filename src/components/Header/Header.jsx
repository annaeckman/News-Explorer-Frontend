import "../Header/header.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <p className="header__logo">NewsExplorer</p>
      </div>
      <div className="header__nav-container">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
