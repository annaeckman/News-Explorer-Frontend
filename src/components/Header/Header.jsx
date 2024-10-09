import "../Header/header.css";
import Nav from "../Nav/Nav";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleSearchSubmit, handleChange, handleLoginClick }) {
  return (
    <header className="header">
      <Nav handleLoginClick={handleLoginClick} />
      <div className="header__text-container">
        <h1 className="header__title">What's going on in the world?</h1>
        <h2 className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account
        </h2>
      </div>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleChange={handleChange}
      />
    </header>
  );
}

export default Header;
