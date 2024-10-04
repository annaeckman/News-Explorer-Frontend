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
  // store this as they are typing
  const [currentUser, setCurrentUser] = useState(null);
  const [activeModal, setActiveModal] = useState("");

  // function for updating currentword
  // grabbing current event to update state variable

  // normal function instead:
  // when you click the submit on the search form (on submit)

  // set currentKeyword using the input from the search bar?
  // define from as today's date use new Date() ?
  // call get year get month and get day and assemble a string
  // define to as today's date + 7
  // call the getNews fn using all above parameters
  //  call setNewsData with the data from the getNews fn
  // add catch block
  // dependency array is not empty, it's based on the search bar input?

  const handleChange = (e) => {
    const value = e.target;
    setCurrentKeyword(value);
    console.log(currentKeyword.value);
  };

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route
            path="/"
            element={<Main handleChange={handleChange} />}
          ></Route>
          <Route path="/saved-news" element={<SavedNews />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
