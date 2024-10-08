import "../NewsCard/NewsCard.css";

function NewsCard({ article }) {
  const source = article.source.name.toUpperCase().split(".")[0];

  return (
    <div className="news-card__container">
      <div className="news-card__image-container">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card__image"
        />
      </div>
      <div className="news-card__text">
        <span className="news-card__date">{article.publishedAt}</span>
        <h2 className="news-card__title">{article.title}</h2>
        <p className="news-card__description">{article.description}</p>
        <span className="news-card__source">{source}</span>
      </div>
    </div>
  );
}

export default NewsCard;
