import "../Main/Main.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";

function Main({ handleChange, handleSearchSubmit }) {
  return (
    <main className="main">
      <Header
        handleSearchSubmit={handleSearchSubmit}
        handleChange={handleChange}
      />
      <AboutMe />
    </main>
  );
}

export default Main;
