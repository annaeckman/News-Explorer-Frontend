import { Link } from "react-router-dom";

function NavLoggedIn({ isInverse }) {
  const signoutBtnClass = !isInverse
    ? "nav__signout-btn nav__signout-btn--white"
    : "nav__signout-btn";

  return (
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link to="/" className="nav__link">
          Home
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to="/saved-news" className="nav__link">
          Saved Articles
        </Link>
      </li>
      <li className="nav__list-item">
        <div className="nav__signout-div">
          <p className="nav__signout-name">Elise</p>
          <button className={signoutBtnClass}></button>
        </div>
      </li>
    </ul>
  );
}

export default NavLoggedIn;
