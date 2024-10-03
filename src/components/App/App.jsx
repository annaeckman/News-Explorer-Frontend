import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/saved-news" element={<SavedNews />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
