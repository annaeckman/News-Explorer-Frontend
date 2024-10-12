import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
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
              element={<Main handleLoginClick={handleLoginClick} />}
            ></Route>
            <Route path="/saved-news" element={<SavedNews />}></Route>
          </Routes>
          <Footer />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            setActiveModal={setActiveModal}
            handleLogin={handleLogin}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
            setActiveModal={setActiveModal}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
