import "../Main/Main.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import NewsCardsList from "../NewsCardList/NewsCardList";

function Main({
  handleLoginClick,
  isLoggedIn,
  handleLogout,
  handleSearchSubmit,
  newsData,
  isSuccess,
  isLoading,
  isError,
  setCurrentKeyword,
  handleSaveArticle,
  handleDeleteArticle,
  setActiveModal,
}) {
  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentKeyword(value);
  };

  return (
    <>
      <Header
        handleSearchSubmit={handleSearchSubmit}
        handleChange={handleChange}
        handleLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <main className="main">
        <NewsCardsList
          newsData={newsData}
          isSuccess={isSuccess}
          isLoading={isLoading}
          isError={isError}
          isLoggedIn={isLoggedIn}
          handleSaveArticle={handleSaveArticle}
          handleDeleteArticle={handleDeleteArticle}
          setActiveModal={setActiveModal}
        />
        <AboutMe />
      </main>
    </>
  );
}

export default Main;
