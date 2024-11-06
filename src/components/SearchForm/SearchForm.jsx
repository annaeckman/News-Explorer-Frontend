import "../SearchForm/SearchForm.css";
import { useState } from "react";

function SearchForm({ handleSearchSubmit, setCurrentKeyword }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(e);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
    setCurrentKeyword(e.target.value);
  };

  return (
    <div className="search">
      <form action="" onSubmit={handleSubmit} className="search__form">
        <div className="search__input-container">
          <input
            onChange={handleChange}
            type="text"
            className="search__input"
            placeholder="Enter topic"
            maxLength="20"
            required
            value={value || ""}
          />
          <button className="search__submit-button">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;

// broke setCurrentKeyword...now it's not grabbing the whole word?!
//
