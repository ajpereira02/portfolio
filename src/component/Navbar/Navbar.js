import React from 'react';
import './Navbar.css';


export default function Navbar() {
    return (
        <nav>
        <div class="logo">
          <a href="https://github.com/ajpereira02" target="_blank" rel='noreferrer noopener'><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/ashley-pereira-6946992a/" target="_blank" rel='noreferrer noopener'><i class="fab fa-linkedin"></i></a>
          <a href="mailto:ashleypereira70@gmail.com" target="_blank" rel='noreferrer noopener'><i class="fas fa-envelope"></i></a>
        </div>
        <div class="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}