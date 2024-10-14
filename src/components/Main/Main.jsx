import "../Main/Main.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import NewsCardsList from "../NewsCardList/NewsCardList";
import { useState } from "react";
import { getNews } from "../../utils/newsapi";
import { APIkey } from "../../utils/constants";
import {
  todaysDate,
  currentYear,
  currentMonth,
  currentDay,
  lastWeeksDate,
  lastWeekYear,
  lastWeekMonth,
  lastWeekDay,
} from "../../utils/Dates";

function Main({ handleLoginClick, handleHamburgerClick }) {
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
    // const todaysDate = new Date();
    // const currentYear = todaysDate.getFullYear();
    // const currentMonth = todaysDate.getMonth() + 1;
    // const currentDay = todaysDate.getDate();

    const to = `${currentYear}-${currentMonth}-${currentDay}`;

    // const lastWeeksDate = new Date(
    //   todaysDate.getTime() - 7 * 24 * 60 * 60 * 1000
    // );
    // const lastWeekYear = lastWeeksDate.getFullYear();
    // const lastWeekMonth = lastWeeksDate.getMonth() + 1;
    // const lastWeekDay = lastWeeksDate.getDate();
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
      />
      <NewsCardsList
        newsData={newsData}
        isSuccess={isSuccess}
        isLoading={isLoading}
        isError={isError}
      />
      <AboutMe />
    </main>
  );
}

export default Main;
