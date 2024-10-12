import "../NewsCard/NewsCard.css";

function NewsCard({ article }) {
  const source = article.source.name.toUpperCase().split(".")[0];
  const dateInNumbers = article.publishedAt.split("T")[0].split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateInWords = `${months[dateInNumbers[1]]} ${dateInNumbers[2]}, ${
    dateInNumbers[0]
  }`;
  return (
    <div className="news-card__container">
      <div className="news-card__image-container">
        <div className="news-card__sign-in-btn news-card__sign-in-btn_hidden">
          Sign in to save articles
        </div>
        {/* add logic to above button class that uses usercontext context 
        to remove the hidden class or not and enable the save button */}
        <button disabled className="news-card__save"></button>
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
