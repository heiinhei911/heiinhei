import { useState } from "react";
import { send } from "emailjs-com";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const ContactForm = ({ headingsHeight }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!sent) {
      if (email !== "" && name !== "" && subject !== "" && message !== "") {
        send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          { from_name: name, from_email: email, subject, message },
          process.env.REACT_APP_EMAILJS_USER_ID
        )
          .then((response) =>
            console.log("Success!", response.status, response.text)
          )
          .then((error) => console.error(error));
        setSent(true);
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
        setTimeout(() => {
          setSent(false);
        }, 5000);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => handleFormSubmit(e)}
      className="content-flex-wrapper max-w-lg md:max-w-2xl md:px-5 mx-auto"
      style={{ minHeight: `calc(100% - ${headingsHeight}px)` }} // 2.25rem
      // className="w-full py-1 md:py-0 max-w-2xl md:px-5 block mx-auto"
    >
      <label className="contact-form-label first:mt-0" htmlFor="name">
        Name{" "}
        <input
          type="text"
          className="contact-form-input "
          placeholder="Your name..."
          required
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="contact-form-label" htmlFor="email">
        Email{" "}
        <input
          type="email"
          className="contact-form-input "
          placeholder="Your email address..."
          required
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="contact-form-label" htmlFor="subject">
        Subject{" "}
        <input
          type="text"
          className="contact-form-input"
          placeholder="What's your message?"
          required
          value={subject}
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <label className="contact-form-label" htmlFor="message">
        Message{" "}
        <textarea
          type="text"
          className="contact-form-input min-h-[2.5rem] max-h-72 resize-y"
          rows={5}
          placeholder="Write a description of your message..."
          required
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="btns block mx-auto text-white bg-yellow-500 hover:bg-yellow-400 hover:scale-115 active:bg-yellow-300 rounded px-5 py-2"
      >
        <span
          className="flex flex-row justify-center items-center space-x-2"
          // initial={{ opacity: 1 }}
          // animate={{ opacity: sent ? [1, 0, 1] : [1, 0.5, 1] }}
          // transition={{ duration: 1 }}
        >
          {sent ? <FaCheck /> : <FaArrowRight />}
          <p className="text-xl select-none">{sent ? "Sent" : "Send"}</p>
        </span>
      </button>
    </form>
  );
};
export default ContactForm;
