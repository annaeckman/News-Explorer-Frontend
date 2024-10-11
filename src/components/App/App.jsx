import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { APIkey } from "../../utils/constants";
import { getNews } from "../../utils/newsapi";

import "./App.css";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

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
      .catch((err) => {
        console.error(err);
        setIsError(true);
      });
  };

  const handleRegistration = (values, resetRegistrationForm) => {
    if (!values) return;

    //   registerUser(values)
    //     .then((res) => {
    //       setIsLoggedIn(true);
    //       setCurrentUser(res.data);
    //       resetRegistrationForm();
    //       closeActiveModal();
    //     })
    //     .catch((res) => {
    //       console.log(`There is an error in handleUserRegistration: ${res}`);
    //     });
  };

  const handleLogin = (values, resetLoginForm) => {
    if (!values) {
      return;
    }
    // signinUser(values)
    //   .then((res) => {
    //     setToken(res.token);
    //     return getUserByToken(res.token);
    //   })
    //   .then((user) => {
    //     setCurrentUser(user);
    //     setIsLoggedIn(true);
    //     closeActiveModal();
    //     navigate(protectedDestination || "/");
    //     resetLoginForm();
    //   })
    //   .catch((err) => {
    //     console.error("Login failed", err);
    //   });
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
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
                  handleLoginClick={handleLoginClick}
                  isLoading={isLoading}
                />
              }
            ></Route>
            <Route path="/saved-news" element={<SavedNews />}></Route>
          </Routes>
          <Footer />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            isLoading={isLoading}
            setActiveModal={setActiveModal}
            handleLogin={handleLogin}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
            isLoading={isLoading}
            setActiveModal={setActiveModal}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
