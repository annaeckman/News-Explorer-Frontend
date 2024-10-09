import "../Main/Main.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import NewsCardsList from "../NewsCardList/NewsCardList";

function Main({
  handleChange,
  handleSearchSubmit,
  newsData,
  isSuccess,
  handleLoginClick,
}) {
  return (
    <main className="main">
      <Header
        handleSearchSubmit={handleSearchSubmit}
        handleChange={handleChange}
        handleLoginClick={handleLoginClick}
      />
      <NewsCardsList newsData={newsData} isSuccess={isSuccess} />
      <AboutMe />
    </main>
  );
}

export default Main;
