import "../NewsCardList/NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsData }) {
  console.log(newsData);
  return (
    <section className="news-cards">
      <div className="news-cards__container">
        <ul className="news-cards__list">
          {newsData.map((article) => {
            return <NewsCard key={article.url} article={article} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default NewsCardList;
