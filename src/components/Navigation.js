import React from "react";
import Link from 'gatsby-link';

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#resume">
          Resume
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#portfolio">
          Works
        </a>
      </li>
      <li>
        <Link to="./photography/" href="#photography">
          Photography
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
