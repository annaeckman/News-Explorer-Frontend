import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
