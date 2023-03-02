import { useState } from "react";
import "./Contact.css";
import Loading from "../Loading/Loading";
import pdf from "../../pdf/Reito.Resume.SoftwareEngineer111022 (4).pdf";

function Contact() {
  const [contactLoading, setContactLoading] = useState(true);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(() => ({
      ...contact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reitos.pythonanywhere.com/api/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          alert("Form submitted");
        });
      } else {
        alert("Error occured! Try again...");
      }
    });
    setContact({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {contactLoading ? (
        <Loading
          title="Contact"
          setLoading={setContactLoading}
          loading={contactLoading}
        />
      ) : (
        <section id="contact" className="section">
          <div className="contact__container container">
            {/* contactus */}
            <div className="title">
              <h1 className="contact__title">
                <span aria-hidden="true">04</span>Contact
              </h1>
            </div>
            <div className="box">
              {/* form box */}
              <div className="contact form">
                <form onSubmit={handleSubmit}>
                  <div className="formBox">
                    <div className="row100">
                      <div className="inputBox">
                        <span>Name</span>
                        <input
                          name="name"
                          onChange={handleChange}
                          value={contact.name}
                          type="text"
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="row50">
                      <div className="inputBox">
                        <span>Email</span>
                        <input
                          name="email"
                          onChange={handleChange}
                          value={contact.email}
                          type="text"
                          required
                        ></input>
                      </div>
                      <div className="inputBox">
                        <span>Phone</span>
                        <input
                          name="phone"
                          onChange={handleChange}
                          value={contact.phone}
                          type="text"
                        ></input>
                      </div>
                    </div>

                    <div className="row100">
                      <div className="inputBox">
                        <span>Message</span>
                        <textarea
                          name="message"
                          onChange={handleChange}
                          value={contact.message}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="row100">
                      <div className="inputBox">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* info box */}
              <div className="contact info">
                <h3>Contact Info</h3>
                <div className="infoBox">
                  <div>
                    <span>
                      <i className="fa-solid fa-house"></i>
                    </span>
                    <p>
                      Jersey City, NJ <br />
                      USA
                    </p>
                  </div>
                  <div>
                    <span>
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                    </span>
                    <a href="mailto:s.reitiger@gmail.com">
                      s.reitiger@gmail.com
                    </a>
                  </div>
                  <div>
                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <p>+1 979-661-4280</p>
                  </div>
                  {/* social media */}
                  <ul className="sci">
                    <li>
                      <a href="https://www.linkedin.com/in/reitos/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/reitoserizawa">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/@s.reitiger">
                        <i className="fa-brands fa-medium"></i>
                      </a>
                    </li>
                    <li>
                      <a href={pdf} target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-file"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* map box */}
              <div className="contact map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48385.97124838279!2d-74.10383605669709!3d40.71530423970881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d225bfafdd%3A0x249f013a2cd25d9!2sJersey%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1677694214750!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="jersey city"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Contact;
