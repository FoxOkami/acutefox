import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./Contact.css";

export default function Contact() {
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
    const formErrors = { ...errors };
    const formFields = { ...fields };
    if (Object.values(formFields).some((value) => !value === true)) {
      let errorsObjectFromFieldsObject = Object.fromEntries(
        Object.entries(formFields).map(function ([key, value]) {
          return [key, !value];
        })
      );
      setErrors({ ...formErrors, ...errorsObjectFromFieldsObject });
      // there are empty form fields, time to bail
      return;
    }
    if (Object.values(formErrors).some((value) => value === true)) {
      // there are form errors, time to bail
      return;
    }
    try {
      setSubmitProcessing(true);
      const docRef = await addDoc(collection(db, "incoming-messages"), {
        name: formFields.name,
        email: formFields.email,
        message: formFields.message,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.error("Error sending message", e);
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
    <div className="contact global-lightgray-background">
      <div id="contact-landing" className="global-jump-link"></div>
      <h1>Get in Touch</h1>
      <form className="contact-form" onSubmit={deliver}>
        <div className="contact-input-package">
          <span id="invalid-name" className="contact-error-message">
            This field is required
          </span>
          <input
            type="text"
            name="name"
            aria-label="name"
            aria-invalid={errors.name}
            aria-errormessage="invalid-name"
            aria-required
            placeholder="Name"
            className="contact-input"
            onChange={updateField}
            onBlur={validateField}
            value={fields.name}
          />
        </div>
        <div className="contact-input-package">
          <span id="invalid-email" className="contact-error-message">
            Please enter a valid email
          </span>
          <input
            type="email"
            name="email"
            aria-label="email"
            aria-invalid={errors.email}
            aria-errormessage="invalid-email"
            aria-required
            placeholder="Email"
            className="contact-input"
            onChange={updateField}
            onBlur={validateField}
            value={fields.email}
          />
        </div>
        <div className="contact-input-package">
          <span id="invalid-message" className="contact-error-message">
            This field is required
          </span>
          <textarea
            id="message"
            name="message"
            aria-label="message"
            aria-invalid={errors.message}
            aria-errormessage="invalid-message"
            aria-required
            placeholder="Message"
            className="contact-message"
            rows={10}
            onChange={(event) => {
              textareaAutoResizer(event);
              updateField(event);
            }}
            onBlur={validateField}
            value={fields.message}
          />
        </div>
        <div className="contact-form-submit">
          <input
            type="submit"
            className="global-button"
            aria-disabled={submitProcessing}
            disabled={submitProcessing}
          />
          <span
            className={submitSuccess ? "contact-visible" : "contact-hidden"}
            role="alert"
            aria-live="polite"
          >
            Message sent, thank you!
          </span>
        </div>
      </form>
    </div>
  );
}
