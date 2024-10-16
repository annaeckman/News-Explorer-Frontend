import { useState } from "react";
import "../NewsCard/NewsCard.css";
import { useLocation } from "react-router-dom";

function NewsCard({ article, isLoggedIn }) {
  const location = useLocation();
  const source = article.source.name.toUpperCase().split(".")[0];
  const dateInWords = new Date(article.publishedAt).toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [isClicked, setIsClicked] = useState(false);

  const handleSaveClick = () => {
    isClicked === true ? setIsClicked(false) : setIsClicked(true);
    // add logic to add saved article to currentUser state...?
  };

  return (
    <div className="news-card__container">
      <div className="news-card__image-container">
        <div
          className={"news-card__sign-in-icon news-card__sign-in-icon_hidden"}
        >
          Sign in to save articles
        </div>
        {/* add logic to above button class that uses usercontext context 
        to remove the hidden class or not and enable the save button */}
        <div
          className={
            location.pathname === "/saved-news"
              ? "news-card__keyword-icon"
              : "news-card__keyword-icon_hidden"
          }
        >
          Nature
        </div>
        <button
          {...(isLoggedIn ? disabled : "")}
          className={
            isClicked
              ? "news-card__save_active news-card__save"
              : "news-card__save"
          }
          onClick={handleSaveClick}
        ></button>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card__image"
        />
      </div>
      {/* use aria disabled to make this button more accessible and 
      not completely disappear when it is native disabled
      make save button & icon it's own component */}
      <div className="news-card__text">
        <span className="news-card__date">{dateInWords}</span>
        <h2 className="news-card__title">{article.title}</h2>
        <p className="news-card__description">{article.description}</p>
        <span className="news-card__source">{source}</span>
      </div>
    </div>
  );
}

export default NewsCard;
