import "./Footer.css";
import github from "../../assets/github-icon.png";
import linkedin from "../../assets/linkedin-icon.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links-container">
        <p className="footer__home">Home</p>
        <p className="footer__tripleten">TripleTen</p>
        <img src={github} alt="" className="footer__icon" />
        <img src={linkedin} alt="" className="footer__icon" />
      </div>
    </footer>
  );
}

export default Footer;
