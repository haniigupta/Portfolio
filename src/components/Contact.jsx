import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">
        Let's Connect
      </h2>

      <div className="contact-grid">

        <a
          href="mailto:hanigupta1505@gmail.com"
          className="contact-card"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/haniigupta"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/hani-gupta-3916b931b/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://leetcode.com/u/haniguptaa_/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <SiLeetcode />
          <span>LeetCode</span>
        </a>

      </div>
    </section>
  );
}

export default Contact;