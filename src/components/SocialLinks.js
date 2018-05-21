import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/laqwan-brodie-ms-53328220">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/thelonexwolf">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/thelonexwolf/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/lbrodie11">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
