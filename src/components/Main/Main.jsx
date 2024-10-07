import "../Main/Main.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import NewsCardsList from "../NewsCardList/NewsCardList";

function Main({ handleChange, handleSearchSubmit, newsData }) {
  return (
    <main className="main">
      <Header
        handleSearchSubmit={handleSearchSubmit}
        handleChange={handleChange}
      />
      <AboutMe />
      <NewsCardsList newsData={newsData} />
    </main>
  );
}

export default Main;
