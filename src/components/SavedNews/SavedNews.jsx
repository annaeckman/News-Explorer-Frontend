import "../SavedNews/SavedNews.css";
import Nav from "../Nav/Nav";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedCardsList from "../SavedCardsList/SavedCardsList";
import { pageAppearances } from "../../utils/pageAppearances";

function SavedNews({
  handleHamburgerClick,
  isLoggedIn,
  currentUser,
  handleLogout,
}) {
  const isInverse = pageAppearances.home === "dark";

  return (
    <div className="saved-news">
      <Nav
        isInverse={isInverse}
        isLoggedIn={isLoggedIn}
        handleHamburgerClick={handleHamburgerClick}
        handleLogout={handleLogout}
      />
      <SavedNewsHeader currentUser={currentUser} />
      <SavedCardsList />
    </div>
  );
}

export default SavedNews;
