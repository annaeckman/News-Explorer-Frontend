import "./SavedCardsList.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NewsCard from "../NewsCard/NewsCard";

function SavedCardsList() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <ul className="saved-cards">
        {currentUser.savedNews.map((article) => {
          return <NewsCard article={article} key={article.url} />;
        })}
      </ul>
    </>
  );
}

export default SavedCardsList;
