import "../AboutMe/AboutMe.css";
import selfie from "../../assets/anna-selfie.jpeg";

function AboutMe() {
  return (
    <section className="about">
      <div className="about__selfie-container">
        <img src={selfie} alt="" className="about__selfie" />
      </div>
      <div className="about__info">
        <h3 className="about__title">About the author</h3>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
