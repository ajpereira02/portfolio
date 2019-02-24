import React from "react";
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
            {" "}
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#About">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#Skills">
              Skills
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#Projects">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
