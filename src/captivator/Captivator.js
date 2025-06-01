import DeviceAnimation from '../device-animation/DeviceAnimation';
import "./Captivator.css";

export default function Captivator() {
  return (
    <div className="captivator">
      <div className="captivator-container">
        <div className="captivator-header">
          <h1>Custom Software and Website Development Services</h1>
        </div>
        <a href="#contact-landing" className="global-button">
          Get in touch for a personalized solution
        </a>
      </div>
      <div className="captivator-image-container">
        <img src="work_image_smaller.jpg" className="captivator-head-image" />
      </div>
      <div className="captivator-section">
        <div className="captivator-description">
          <h3>Unique, Elegant, Responsive</h3>
          <p>
            Building and maintaining software that works on any platform and
            matches your needs.
          </p>
          <p>
            Not everything fits in the prefab world, maybe you want more control
            or something that truly stands out.
          </p>
          <p>That's where ACUTEFOX comes in.{" "}
            <a href="#contact-landing" className="global-text-link">
              Reach out
            </a>{" "}
            <span>and let's create something extraordinary!</span>
          </p>
        </div>
        <DeviceAnimation />
      </div>
    </div>
  );
}
