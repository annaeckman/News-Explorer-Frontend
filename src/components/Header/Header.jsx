import "../Header/header.css";
import Nav from "../Nav/Nav";
import SearchForm from "../SearchForm/SearchForm";

function Header() {
  return (
    <header className="header">
      <Nav />
      <h1 className="home__title">What's going on in the world?</h1>
      <h2 className="home__subtitle">
        Find the latest news on any topic and save them in your personal account
      </h2>
      <SearchForm />
    </header>
  );
}

export default Header;
