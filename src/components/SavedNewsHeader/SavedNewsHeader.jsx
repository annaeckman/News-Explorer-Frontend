import "../SavedNewsHeader/SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <h3 className="saved-news-header__title">Saved articles</h3>
      <p className="saved-news-header__subtitle">
        Elise, you have 5 saved articles
      </p>
      <p className="saved-news-header__keywords">
        By keywords:{" "}
        <span className="saved-news-header__keywords_bold">
          Nature, Yellowstone, and 2 others
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
