import "../SavedNews/SavedNews.css";
import Nav from "../Nav/Nav";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { pageAppearances } from "../../utils/pageAppearances";

function SavedNews() {
  const isInverse = pageAppearances.home === "dark";

  return (
    <div className="saved-news">
      <Nav isInverse={isInverse} />
      <SavedNewsHeader />
    </div>
  );
}

export default SavedNews;
