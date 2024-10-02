import "../SearchForm/SearchForm.css";

function SearchForm() {
  return (
    <div className="search__form-container">
      <form action="" className="search__form">
        <div className="search__input-container">
          <input type="text" className="search__input" placeholder="Nature" />
          <button className="search__submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
