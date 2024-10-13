import { Link } from "react-router-dom";

function NavLoggedOut({ handleLoginClick }) {
  return (
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link to="/" className="nav__link">
          Home
        </Link>
      </li>
      <li>
        <button onClick={handleLoginClick} className="nav__signin-btn">
          Sign in
        </button>
      </li>
    </ul>
  );
}

export default NavLoggedOut;
