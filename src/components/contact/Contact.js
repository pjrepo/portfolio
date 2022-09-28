import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const items = [
  {
    i: 1,
    icon: <MdOutlineEmail />,
    contactOption: "Email",
    contactDetail: "pavanjegurupati75@gmail.com",
    link: "mailto:pavanjegurupati75@gmail.com",
    message: "Send a message",
    rel: "a",
  },
  {
    i: 2,
    icon: <BsLinkedin />,
    contactOption: "LinkedIn",
    contactDetail: "Pavan Jegurupati",
    link: "https://www.linkedin.com/in/pavan-jegurupati/",
    message: "Send a message",
    rel: "ab",
  },
  {
    i: 3,
    icon: <BsWhatsapp />,
    contactOption: "Whats App",
    contactDetail: "+91 8978635795",
    link: "https:/api.whatsapp.com/send?phone=+91 8978635795",
    message: "Send a message or call",
    rel: "abc",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmailHandler = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_wcyz67s",
        "template_0w26tzs",
        form.current,
        "bixOiIVcb5opyBhO6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    event.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {items.map((item) => {
            const { i, icon, contactOption, contactDetail, link, message } =
              item;
            return (
              <article key={i} className="contact__option">
                {icon}
                <h4 className="text-light">{contactOption}</h4>
                <h5>{contactDetail}</h5>
                <div
                  className="link"
                  onClick={() => window.open(link, "_blank")}
                >
                  {message}
                </div>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmailHandler}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
