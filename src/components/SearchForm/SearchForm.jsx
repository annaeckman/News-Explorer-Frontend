import "../SearchForm/SearchForm.css";

function SearchForm({ handleChange }) {
  return (
    <div className="search__form-container">
      <form action="" className="search__form">
        <div className="search__input-container">
          <input
            onChange={handleChange}
            type="text"
            className="search__input"
            placeholder="Nature"
          />
          //add on change prob
          <button className="search__submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
