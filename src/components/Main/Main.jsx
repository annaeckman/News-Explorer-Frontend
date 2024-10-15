import "../Main/Main.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import NewsCardsList from "../NewsCardList/NewsCardList";
import { useState } from "react";
import { getNews } from "../../utils/newsapi";
import { APIkey } from "../../utils/constants";
import {
  currentYear,
  currentMonth,
  currentDay,
  lastWeekYear,
  lastWeekMonth,
  lastWeekDay,
} from "../../utils/Dates";

function Main({ handleLoginClick, handleHamburgerClick, isLoggedIn }) {
  const [newsData, setNewsData] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentKeyword(value);
  };

  const handleSearchSubmit = () => {
    const to = `${currentYear}-${currentMonth}-${currentDay}`;
    const from = `${lastWeekYear}-${lastWeekMonth}-${lastWeekDay}`;

    setIsLoading(true);
    setNewsData([]);
    setIsSuccess(false);
    setIsError(false);

    getNews(currentKeyword, APIkey, from, to)
      .then((data) => {
        setIsLoading(false);
        setIsSuccess(true);
        setNewsData(data.articles);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      });
  };

  return (
    <main className="main">
      <Header
        handleSearchSubmit={handleSearchSubmit}
        handleChange={handleChange}
        handleLoginClick={handleLoginClick}
        handleHamburgerClick={handleHamburgerClick}
        isLoggedIn={isLoggedIn}
      />
      <NewsCardsList
        newsData={newsData}
        isSuccess={isSuccess}
        isLoading={isLoading}
        isError={isError}
        isLoggedIn={isLoggedIn}
      />
      <AboutMe />
    </main>
  );
}

export default Main;
