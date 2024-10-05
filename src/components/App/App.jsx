import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { APIkey } from "../../utils/constants";
import { getNews } from "../../utils/newsapi";

import "./App.css";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [newsData, setNewsData] = useState({});
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target;
    setCurrentKeyword(value);
    console.log(currentKeyword.value);
  };

  const handleSearchSubmit = (e) => {
    const from = "2024-10-04";
    const to = "2024-10-11";
    getNews(e, APIkey, from, to)
      .then((data) => {
        console.log(data);
        setNewsData(data);
        console.log(newsData);
      })
      .catch(console.error);
  };

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleSubmit={handleSearchSubmit}
                handleChange={handleChange}
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
