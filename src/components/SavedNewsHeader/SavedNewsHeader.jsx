import "../SavedNewsHeader/SavedNewsHeader.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { UserArticleContext } from "../../contexts/UserArticleContext";

function SavedNewsHeader() {
  const { currentUser } = useContext(CurrentUserContext);
  const { userArticles } = useContext(UserArticleContext);

  const keywords = userArticles.map((article) => article.keyword);

  const keywordsWithoutDuplicates = keywords.reduce((uniques, current) => {
    return { ...uniques, [current]: true };
  }, {});

  // const getKeywords = () => {
  //   const currentKeywordsWithDuplicates = userArticles.map(
  //     (article) => article.keyword
  //   );
  //   const currentKeywordsLowercase = [
  //     ...new Set(currentKeywordsWithDuplicates),
  //   ];
  //   return currentKeywordsLowercase.map(
  //     (keyword) => keyword[0].toUpperCase() + keyword.slice(1)
  //   );
  // };

  const currentKeywords = getKeywords();
  console.log(userArticles.length);
  return (
    <section className="saved-news-header">
      <h3 className="saved-news-header__title">Saved articles</h3>
      <p className="saved-news-header__subtitle">
        {currentUser?.name}, you have {userArticles?.length} saved articles
      </p>
      {!userArticles.length === 0 && (
        <p className="saved-news-header__keywords">
          By keywords:{" "}
          <span className="saved-news-header__keywords_bold">
            {currentKeywords[0]}, {currentKeywords[1]}, and{" "}
            {currentKeywords.length === 3
              ? currentKeywords[2]
              : currentKeywords.length - 2}{" "}
            {currentKeywords.length > 3 && "others"}
          </span>
        </p>
      )}
    </section>
  );
}

export default SavedNewsHeader;
