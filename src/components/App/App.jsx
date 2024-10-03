import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
