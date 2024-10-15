import { useState } from "react";
import "../NewsCard/NewsCard.css";

function NewsCard({ article, isLoggedIn }) {
  const source = article.source.name.toUpperCase().split(".")[0];
  const dateInWords = new Date(article.publishedAt).toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [isClicked, setIsClicked] = useState(false);

  const handleSaveClick = () => {
    isClicked === true ? setIsClicked(false) : setIsClicked(true);
  };

  return (
    <div className="news-card__container">
      <div className="news-card__image-container">
        <div className="news-card__sign-in-btn news-card__sign-in-btn_hidden">
          Sign in to save articles
        </div>
        {/* add logic to above button class that uses usercontext context 
        to remove the hidden class or not and enable the save button */}
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
      {/* use aria disabled to make this stupid button more accessible and 
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
