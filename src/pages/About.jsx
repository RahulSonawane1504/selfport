import "../styles/About.css";
import bgImgs from "../assets/codioful-formerly-gradienta-Iia-DCBlEDg-unsplash.jpg";

function About() {
  return (
    <section
      className="about"
      style={{
        backgroundImage: `url(${bgImgs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="about-content">
        <h2>About Me</h2>
        <p className="fade-in">
          I'm a passionate MERN Stack Web Developer skilled in building modern,
          responsive, and full-stack web applications. From intuitive front-end
          interfaces to scalable back-end systems, I love turning ideas into
          functional, user-focused digital experiences using MongoDB,
          Express.js, React, and Node.js. Always eager to learn and grow, I
          strive to write clean code and deliver impactful solutions.
        </p>

        <h3>Skills & Technologies</h3>
        <ul className="skills-list slide-up">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
