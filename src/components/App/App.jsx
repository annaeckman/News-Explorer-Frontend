import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Main />
        <SavedNews />
        <Footer />
      </div>
    </div>
  );
}

export default App;
