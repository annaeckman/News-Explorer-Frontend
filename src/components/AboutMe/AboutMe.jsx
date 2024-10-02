import "../AboutMe/AboutMe.css";

function AboutMe() {
  return (
    <section className="about">
      <img src="" alt="" className="about__selfie" />
      <div className="about__info">
        <h3 className="about__title">About the author</h3>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
