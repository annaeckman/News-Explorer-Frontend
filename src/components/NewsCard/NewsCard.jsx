import "../NewsCard/NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <div className="news-card__container">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card__image"
        />
        <div className="news-card__text">
          <span className="news-card__date">{article.publishedAt}</span>
          <h2 className="news-card__title">{article.title}</h2>
          <p className="news-card__description">{article.description}</p>
          <span className="news-card__source">{article.source.name}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
