import "../NewsCardList/NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsData }) {
  console.log(newsData);
  return (
    <section className="news-cards-list">
      <h2 className="news-cards-list__title">Search results</h2>
      <div className="news-cards-list__container">
        <ul className="news-cards-list__list">
          {newsData.map((article) => {
            return <NewsCard key={article.url} article={article} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default NewsCardList;
