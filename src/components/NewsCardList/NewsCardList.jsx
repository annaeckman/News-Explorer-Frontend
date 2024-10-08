import "../NewsCardList/NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsData }) {
  const activeNewsDataItems = newsData.slice(0, 3);

  return (
    <section className="news-cards-list">
      <h2 className="news-cards-list__title">Search results</h2>
      <div className="news-cards-list__container">
        <ul className="news-cards-list__list">
          {activeNewsDataItems.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NewsCardList;
