import React, { useCallback, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const createErrorMessage = (field) => {
    setErrors((prevState) => ({
      ...prevState,
      [field]: "This field is required",
    }));
  };
  const sendEmail = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const name = form.current.fromName.value;
      const email = form.current.fromEmail.value;
      const message = form.current.message.value;

      // if the input fields are empty, do not send the email
      if (name === "" || email === "" || message === "") {
        if (form.current.fromName.value === "") {
          createErrorMessage("name");
        }
        if (form.current.fromEmail.value === "") {
          createErrorMessage("email");
        }
        if (form.current.message.value === "") {
          createErrorMessage("message");
        }
        setIsLoading(false);
        return;
      }

      await emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsFormSubmitted(true);
          },
          (error) => {
            console.error(error.text);
          }
        );

      e.target.reset();
      setErrors({ name: "", email: "", message: "" });
      setIsLoading(false);
    },
    [form, setErrors, setIsLoading, setIsFormSubmitted]
  );

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className=""
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div
            className="app__flex"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="fromName"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div
            className="app__flex"
            // make it so that the error message would be shown under the input field
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              name="fromEmail"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <textarea
              className="p-text"
              placeholder="your message"
              name="message"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button className="p-text" type="submit" value="Send">
            {isLoading ? "Sending..." : "Send  message"}
          </button>
        </div>
      ) : (
        <div className="send-message">
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </form>
  );
};
