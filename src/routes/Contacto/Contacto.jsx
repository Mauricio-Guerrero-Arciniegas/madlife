import React from "react";
import "./Contacto.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fnzporp",
      "template_sbj5wdj",
      form.current,
      "7pQTIDrFG3Z9aeQET"
    );
    e.target.reset();
  };
  return (
    <>
      <Navbar />
      <h2 className="titulo">Contacto</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>galeras57@gmail.com</h5>
            <a href="mailto: sgbioarq@gmail.com">Enviar correo</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=573137675461">
              Enviar mensaje
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      </>
  );
};

export default Contact;
