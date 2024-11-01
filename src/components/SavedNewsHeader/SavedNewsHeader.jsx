import "../SavedNewsHeader/SavedNewsHeader.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { UserArticleContext } from "../../contexts/UserArticleContext";

function SavedNewsHeader() {
  const { currentUser } = useContext(CurrentUserContext);
  const { userArticles } = useContext(UserArticleContext);
  const currentKeywordsWithDuplicates = userArticles.map(
    (article) => article.keyword
  );
  const currentKeywords = [...new Set(currentKeywordsWithDuplicates)];

  return (
    <section className="saved-news-header">
      <h3 className="saved-news-header__title">Saved articles</h3>
      <p className="saved-news-header__subtitle">
        {currentUser?.name}, you have {userArticles?.length} saved articles
      </p>
      <p className="saved-news-header__keywords">
        By keywords:{" "}
        <span className="saved-news-header__keywords_bold">
          {currentKeywords[0]}, {currentKeywords[1]}, and{" "}
          {currentKeywords.length - 2} others
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;