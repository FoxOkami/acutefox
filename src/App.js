import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";
import "./WebsiteSection.css";
import SiteHeader from "./site-header/SiteHeader";
import Captivator from "./captivator/Captivator";

function App() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const textareaAutoResizer = (event) => {
    let target = event.target;
    target.style.height = "auto";
    let clientHeight = target.getBoundingClientRect().height;
    let scrollHeight = target.scrollHeight;
    // scrollheight doesn't include borders, take the bigger value so we don't have a shrinking problem on first input
    let messageHeight = Math.max(clientHeight, scrollHeight);
    target.style.height = messageHeight + "px";
  };

  function updateField(event) {
    // onChange
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFields({ ...fields, [fieldName]: fieldValue });
  }

  function validateField(event) {
    // onBlur
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const valid = event.target.validity.valid;
    setErrors({ ...errors, [fieldName]: !fieldValue || !valid });
    setSubmitSuccess(false);
  }

  async function deliver(event) {
    event.preventDefault();
    setSubmitProcessing(true);
    const formErrors = { ...errors };
    const formFields = { ...fields };
    if (Object.values(formFields).some((value) => !value === true)) {
      let errorsObjectFromFieldsObject = Object.fromEntries(
        Object.entries(formFields).map(function ([key, value]) {
          return [key, !value];
        })
      );
      console.log(errorsObjectFromFieldsObject);
      setErrors({ ...formErrors, ...errorsObjectFromFieldsObject });
      console.warn("Empty Field Values", errorsObjectFromFieldsObject);
      return;
    }
    if (Object.values(formErrors).some((value) => value === true)) {
      // there are form errors, time to bail
      console.warn("Form Errors", formErrors);
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "incoming-messages"), {
        name: formFields.name,
        email: formFields.email,
        message: formFields.message,
        createdAt: serverTimestamp(),
      });
      console.log("Success: document created", docRef.id);
    } catch (e) {
      console.error("Error adding document", e);
    } finally {
      setSubmitProcessing(false);
      setFields({
        name: "",
        email: "",
        message: "",
      });
      setSubmitSuccess(true);
    }
  }

  return (
    <div className="App" id="home-landing">
      {/* <div className="site-header">
        <a href="#home-landing" className="company-link">
          <div className="company">
            <img src="logo.svg" />
            <h1 className="company-name">acutefox</h1>
          </div>
        </a>
        <nav className="top-navigation">
          <a href="#home-landing">Home</a>
          <a href="#about-landing">About</a>
          <a href="#services-landing">Services</a>
          <a href="#contact-landing">Contact</a>
        </nav>
      </div> */}
      <SiteHeader />
      {/* <div className="section">
        <div className="section-header">
          <h1>Custom Software and Website Development Services</h1>
        </div>
        <a href="#contact-landing" className="contact-me-button">
          Get in touch for a personalized solution
        </a>
      </div>
      <div className="head-image-container">
        <img src="work_image_smaller.jpg" className="head-image" />
      </div>
      <div className="website-section">
        <div className="description">
          <h3>Unique, Elegant, Responsive</h3>
          <p>
            Building and maintaining software that works on any platform and
            matches your needs.
          </p>
          <p>
            Not everything fits in the prefab world, maybe you want more control
            or something that truly stands out.
          </p>
          <p>That's where ACUTEFOX comes in.</p>
          <p>
            <a href="#contact-landing" className="text-link">
              Reach out
            </a>{" "}
            and let's create something extraordinary!
          </p>
        </div>
        <DeviceAnimation />
      </div> */}
      <Captivator />
      <div id="about-landing" className="jump-link"></div>
      <div className="section-a lightgray-background">
        <div className="section-b">
          <h1 className="section-c">
            Meet the Software Engineer Behind ACUTEFOX
          </h1>
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
            own talents, a small business aiming to improve online presence, or
            a large corporation in need of custom software solutions, ACUTEFOX
            is here to help. <a href="#contact-landing">Contact me</a> today to
            discuss how I can help out.
          </p>
        </div>
      </div>
      <div id="services-landing" className="jump-link"></div>
      <div className="section-a">
        <h1>Services</h1>
        <div className="cards-container">
          <div className="card">
            <div className="card-title">
              <img className="card-title-image" src="gummy_worms.jpg" />
              <div className="card-title-text">Custom Software</div>
            </div>
            <div className="card-description">
              Tailored software solutions that perfectly fit your unique goals.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img
                className="card-title-image"
                src="containered_assorted_candy.jpg"
              />
              <div className="card-title-text">Website Design</div>
            </div>
            <div className="card-description">
              Visually stunning and user-friendly websites that represent your
              brand effectively.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img className="card-title-image" src="gummy_bears.jpg" />
              <div className="card-title-text">Mobile Apps</div>
            </div>
            <div className="card-description">
              Portable device solutions that connect you with your customers
              anytime and anywhere.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img className="card-title-image" src="m_ms.jpg" />
              <div className="card-title-text">E-Commerce Solutions</div>
            </div>
            <div className="card-description">
              Establish an e-commerce presense with trusted platforms with your
              bottom line in mind.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img className="card-title-image" src="assorted_candy.jpg" />
              <div className="card-title-text">System Integration</div>
            </div>
            <div className="card-description">
              Convert disjointed systems into a cohesive and effective
              singularity.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img className="card-title-image" src="jelly_beans.jpg" />
              <div className="card-title-text">SEO Services</div>
            </div>
            <div className="card-description">
              Enhance online visibility and drive traffic from leading search
              engines.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img className="card-title-image" src="spirals.jpg" />
              <div className="card-title-text">Support & Maintenance</div>
            </div>
            <div className="card-description">
              Keep applications running smoothly at all times.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img className="card-title-image" src="macaroons.jpg" />
              <div className="card-title-text">Consultation</div>
            </div>
            <div className="card-description">
              Insightful guides for your technology initiatives.
            </div>
          </div>
        </div>
      </div>
      <div id="contact-landing" className="jump-link"></div>
      <div className="contact section-a lightgray-background">
        <h1>Get in Touch</h1>
        <form className="contact-form" onSubmit={deliver}>
          <div className="input-package">
            <span id="invalid-name" className="error-message">
              This field is required
            </span>
            <input
              type="text"
              name="name"
              required
              aria-label="name"
              aria-invalid={errors.name}
              aria-errormessage="invalid-name"
              aria-required
              placeholder="Name"
              className="input"
              onChange={updateField}
              onBlur={validateField}
              value={fields.name}
            />
          </div>
          <div className="input-package">
            <span id="invalid-email" className="error-message">
              Please enter a valid email
            </span>
            <input
              type="email"
              name="email"
              required
              aria-label="email"
              aria-invalid={errors.email}
              aria-errormessage="invalid-email"
              aria-required
              placeholder="Email"
              className="input"
              onChange={updateField}
              onBlur={validateField}
              value={fields.email}
            />
          </div>
          <div className="input-package">
            <span id="invalid-message" className="error-message">
              This field is required
            </span>
            <textarea
              id="message"
              name="message"
              required
              aria-label="message"
              aria-invalid={errors.message}
              aria-errormessage="invalid-message"
              aria-required
              placeholder="Message"
              className="message"
              rows={10}
              onChange={(event) => {
                textareaAutoResizer(event);
                updateField(event);
              }}
              onBlur={validateField}
              value={fields.message}
            />
          </div>
          <div className="form-submit">
            <input
              type="submit"
              className="contact-me-button"
              aria-disabled={submitProcessing}
              disabled={submitProcessing}
            />
            <span
              className={submitSuccess ? "visible" : "hidden"}
              role="alert"
              aria-live="polite"
            >
              Message sent, thank you!
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
