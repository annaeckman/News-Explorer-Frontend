import "../Main/Main.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";

function Main({ handleChange }) {
  return (
    <main className="main">
      <Header handleChange={handleChange} />
      <AboutMe />
    </main>
  );
}

export default Main;
