import "../styles/Contact.css";
import bgImg from "../assets/codioful-formerly-gradienta-Iia-DCBlEDg-unsplash.jpg";

function Contact() {
  return (
    <section
      className="contact"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          Have a project or just want to say hello? I'd love to hear from you!
        </p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
