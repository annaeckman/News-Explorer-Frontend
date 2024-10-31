import "./SavedCardsList.css";
import { useContext } from "react";
import { UserArticleContext } from "../../contexts/UserArticleContext";
import NewsCard from "../NewsCard/NewsCard";

function SavedCardsList() {
  const { userArticles } = useContext(UserArticleContext);
  console.log(userArticles);
  return (
    <>
      <ul className="saved-cards">
        {userArticles?.map((article) => {
          return <NewsCard article={article} key={article.image} />;
        })}
      </ul>
    </>
  );
}

export default SavedCardsList;
