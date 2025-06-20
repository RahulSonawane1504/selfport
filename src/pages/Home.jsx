import "../styles/Home.css";
import bgImage from "../assets/daniel-joshua-wS1iBTGqi5s-unsplash.jpg";

function Home() {
  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Hello, I'm Rahul</h1>
      <p>
        I'm a frontend developer passionate about building beautiful and
        functional web apps with React, Node.js, Express, and MongoDB. I create
        responsive, clean, and user-friendly solutions ..!
      </p>
      {/* <a href="/projects" className="btn">
        View My Work
      </a> */}
    </section>
  );
}

export default Home;
