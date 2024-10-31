import "../SavedNews/SavedNews.css";
import Nav from "../Nav/Nav";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedCardsList from "../SavedCardsList/SavedCardsList";
import { pageAppearances } from "../../utils/pageAppearances";

function SavedNews({ isLoggedIn, handleLogout }) {
  const isInverse = pageAppearances.home === "dark";

  return (
    <div className="saved-news">
      <Nav
        isInverse={isInverse}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <SavedNewsHeader />
      <SavedCardsList />
    </div>
  );
}

export default SavedNews;
