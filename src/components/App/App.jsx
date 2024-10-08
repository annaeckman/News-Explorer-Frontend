import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { APIkey } from "../../utils/constants";
import { getNews } from "../../utils/newsapi";

import "./App.css";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentKeyword(value);
  };

  const handleSearchSubmit = () => {
    const todaysDate = new Date();
    const currentYear = todaysDate.getFullYear();
    const currentMonth = todaysDate.getMonth() + 1;
    const currentDay = todaysDate.getDate();

    const to = `${currentYear}-${currentMonth}-${currentDay}`;

    const lastWeeksDate = new Date(
      todaysDate.getTime() - 7 * 24 * 60 * 60 * 1000
    );
    const lastWeekYear = lastWeeksDate.getFullYear();
    const lastWeekMonth = lastWeeksDate.getMonth() + 1;
    const lastWeekDay = lastWeeksDate.getDate();
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
      .catch(console.error);
    // put setisError in the catch block
  };

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleSearchSubmit={handleSearchSubmit}
                handleChange={handleChange}
                newsData={newsData}
                isSuccess={isSuccess}
              />
            }
          ></Route>
          <Route path="/saved-news" element={<SavedNews />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
