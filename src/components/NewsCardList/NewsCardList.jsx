import "../NewsCardList/NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";
import notFound from "../../assets/not-found.png";
import searchForNews from "../../assets/search-for-news.png";

// initial empty state, no search term, hidden
// happy path: news data has length, show results and show more
// no results for search term: "no results please try again"
// wrapper component that differentiates btwn these 3, then render's each
// of the above 3 options

// i need to hide the button when all 100 items are shown

function NewsCardList({ newsData, isSuccess, isLoading }) {
  const [activeNewsDataLength, setActiveNewsDataLength] = useState(3);
  const activeNewsDataItems = newsData.slice(0, activeNewsDataLength);

  const handleOnClick = () => {
    setActiveNewsDataLength((prevState) => prevState + 3);
  };

  return (
    <section
      className={
        newsData.length === 0 && !isSuccess
          ? "news-cards-list_hidden"
          : "news-cards-list"
      }
    >
      <div
        className={
          newsData.length === 0 && isSuccess
            ? "news-cards-list__not-found"
            : "news-cards-list__not-found_hidden"
        }
      >
        <img
          src={notFound}
          alt="old school microscope with a sad face inside"
          className="news-cards-list__not-found-icon"
        />
        <h3 className="news-cards-list__not-found-title">Nothing found</h3>
        <p className="news-cards-list__not-found-subtitle">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
      <div
        className={
          isLoading
            ? "news-cards-list__preloader"
            : "news-cards-list__preloader_hidden"
        }
      >
        <img
          src={searchForNews}
          alt="a spinning circle loading icon"
          className="news-cards-list__preloader-icon"
        />
        <h3 className="news-cards-list__preloader-text">
          Searching for news...
        </h3>
      </div>
      <h2 className="news-cards-list__title">Search results</h2>
      <div className="news-cards-list__container">
        <ul className="news-cards-list__list">
          {activeNewsDataItems.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </ul>
      </div>
      <button onClick={handleOnClick} className="news-cards-list__more-button">
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;

// important lessons:
// don't unneccessarily create a state variable for something you can derive
// you want to store as specific, as small a piece of state you can,
// that's used to derive what you need that's coming through from props
// avoid setting state from state - it will cause a loop!
// if you HAVE TO, you have to use a useEffect
// 1st rule of useEffects is don't use them. lol.
