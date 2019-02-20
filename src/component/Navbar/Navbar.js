import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div class="logo">
        <a
          href="https://github.com/ajpereira02"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i class="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ashley-pereira-6946992a/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i class="fab fa-linkedin" />
        </a>
        <a
          href="mailto:ashleypereira70@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i class="fas fa-envelope" />
        </a>
      </div>
      <div class="menu">
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="aboutme">About</Link>
          </li>
          <li>
            <Link to="skills">Skills</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
