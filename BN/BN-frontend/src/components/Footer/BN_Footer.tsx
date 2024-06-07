import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BN_Footer.scss";

export const BN_Footer = () => {
  return (
    <>
   
      <div className="footer-container">
      
        <section className="footer-about">
          <h3>Contact</h3>
          <div className="contact-container">
            <div>
              <p>Phone: 072 541 2222</p>
              <p>Mail: info@bakfull.nu
              </p>
            </div>
          </div>
        </section>
        <section className="footer-icons">
          <h3>Follow us</h3>
          <div>
            <a href="https://www.youtube.com/" className="classes.youtube">
              <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
            <a href="https://www.facebook.com/" className="classes.facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/" className="classes.twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/" className="classes.instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
