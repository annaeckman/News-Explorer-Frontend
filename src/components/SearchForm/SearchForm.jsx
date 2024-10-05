import "../SearchForm/SearchForm.css";

function SearchForm({ handleChange, handleSearchSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(e);
  };

  return (
    <div className="search__form-container">
      <form action="" onSubmit={handleSubmit} className="search__form">
        <div className="search__input-container">
          <input
            onChange={handleChange}
            type="text"
            className="search__input"
            placeholder="Nature"
          />
          <button className="search__submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
