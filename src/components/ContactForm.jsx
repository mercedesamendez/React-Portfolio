import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
     const form = useRef();
  const [status, setStatus] = useState("");

  const sendMail = (e) => {
    e.preventDefault();

    const parms = {
      name: form.current["name"].value,
      email: form.current["email"].value,
      message: form.current["message"].value,
    };

    emailjs
      .send("service_vlit3sn", "template_lvgobeo", parms, "zJexBJwORvFnnOBCA")
      .then(() => {
        setStatus("Your email has been sent!");
        form.current.reset();
      })
      .catch((error) => {
        setStatus("Oops! Something went wrong.");
        console.error("EmailJS error:", error);
      });
  };
    
    return (
        <section id="contact" className="container">
            <h2>let's create together!</h2>
            <form ref={form} onSubmit={sendMail}id="email-form">
                <div className="form-group">
                    <label for="name">name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label for="email">email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label for="message">message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="button">send</button>
            </form>
            {status && <p>{status}</p>}

            <p id="form-status" className="hidden"></p>
        </section>
    );
}
export default ContactForm;