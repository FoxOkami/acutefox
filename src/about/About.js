import "./About.css";

export default function About() {
  return (
    <div className="about global-lightgray-background">
      <div id="about-landing" className="global-jump-link"></div>
      <div className="about-container">
        <h2 className="about-header global-text-align-center">
          Meet the Software Engineer Behind ACUTEFOX
        </h2>
        <p>
          With more than 10 years of experience in software development and
          website design, I am dedicated to creating unique and innovative
          solutions for my clients.
        </p>
        <p>
          I specialize in tailoring each solution to meet client specific
          requirements and ensuring a seamless and efficient user experience.
        </p>
        <p>
          Whether you are an individual looking for something to showcase your
          own talents, a small business aiming to improve online presence, or a
          large corporation in need of custom software solutions, ACUTEFOX is
          here to help.{" "}
          <a href="#contact-landing" className="global-text-link">
            Contact me
          </a>{" "}
          today to discuss how I can help out.
        </p>
      </div>
    </div>
  );
}
