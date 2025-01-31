import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:pvenugop@iu.edu" data-cursor="disable">
                pvenugop@iu.edu
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919920782622" data-cursor="disable">
                +1 812 322 4878
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/PRAjwal03714"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/PrajwalVenugopal/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
           
          </div>
          <div className="contact-box">
          <h2>
             
            </h2>
            <h5>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
