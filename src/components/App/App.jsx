import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
