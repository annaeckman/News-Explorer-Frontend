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
          I’m Anna. A full-stack software engineer with 1+ years experience in
          React, Typescript, and Node. My skill set includes CSS, HTML,
          Typescript, Tailwind, Next, MongoDB, Git, and Jira.
        </p>
        <p className="about__text">
          I'm also a math teacher turned software engineer! As a teacher of 6+
          years, I've honed my ability to deeply understand and communicate
          complex concepts. After teaching for only 2 years, I became Department
          Head and led a team to develop a PreCalculus curriculum from scratch,
          onboarding new teachers to the material. I can explain highly
          technical problems to tech and non tech people alike and break down
          complicated problems into tangible steps. This experience is
          invaluable to my work as a developer. I'm always learning, as a
          teacher and a developer. I utilize my analytical and communication
          skills to develop excellent and accessible! user experiences and I'm
          eager to join a passionate and collaborative engineering team!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
