import "../AboutMe/AboutMe.css";
import selfie from "../../assets/anna-selfie.jpeg";
import picture from "../../assets/anna-picture.jpg";

function AboutMe() {
  return (
    <section className="about">
      <div className="about__selfie-container">
        <img
          src={picture}
          alt="close up picture of anna's face in black and white"
          className="about__selfie"
        />
      </div>
      <div className="about__info">
        <h3 className="about__title">About the author</h3>
        <p className="about__text">
          I’m Anna. A full-stack software engineer with 5+ years experience in
          education who loves to build things.
        </p>
        <p className="about__text">
          After 6 years in education, I enrolled in a 10 month full stack
          software engineering program with TripleTen. There I built several
          full stack and frontend projects using html/css, React, mongoDB,
          express, node.js, JavaScript, postman, compass and so much more.
          Combing through lines of code reminds me of combing through students’
          problems sets; different approaches, different styles, creative work
          arounds. It is endlessly inspiring. I am self-reliant, creative, and a
          capable builder/thinker who thrives working on a team on projects I
          care about.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
