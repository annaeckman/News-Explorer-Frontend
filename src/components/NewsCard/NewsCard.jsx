import "../NewsCard/NewsCard.css";

function NewsCard({ newsData }) {
  return (
    <div class="news__card-section">
      <div class="news-card">
        <img src="image-url" alt="news image" class="news-card__image" />
        <div class="news-card__content">
          <span class="news-card__date">November 4, 2020</span>
          <h2 class="news-card__title">
            Everyone Needs a Special 'Sit Spot' in Nature
          </h2>
          <p class="news-card__description">
            Ever since I read Richard Louv's influential book...
          </p>
          <span class="news-card__source">Treehugger</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
