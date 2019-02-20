import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import './Header.css';

export default function Header() {
  return (
    <header>
      <div class="hero-container">
        <h1>Hi, I'm Ashley, Full Stack Web Developer in London</h1>
        <Link to="projects" class="btn-work">
          VIEW WORK
        </Link>
        <Link to="contacts" class="btn-contact">
          CONTACT ME
        </Link>
      </div>
    </header>
  );
}
