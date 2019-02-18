import React from "react";
import "./Contacts.css";

export default function Header() {
  return (
    <div class="contact-section">
      <h2>Contact Me</h2>

      <div class="social-container">
        <p>Get in touch with me, or Follow me on:</p>

        <div class="col-1">
          <div class="line1">
            <i class="fab fa-github" />
            <p>
              <a
                href="https://github.com/ajpereira02"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="text-bold">GitHub</span>
              </a>{" "}
              <br />
            </p>
          </div>

          <div class="line1">
            <i class="fab fa-linkedin" />
            <p>
              <a
                href="https://www.linkedin.com/in/ashley-pereira-6946992a/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="text-bold">Linkedin</span>
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
        <div class="col-2">
          <div class="line1">
            <i class="fas fa-envelope" />
            <p>
              <a
                href="mailto:ashleypereira70@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="text-bold">Email</span>
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="line1">
            <p>Copyright © 2019 Developed By Ashley Pereira</p>
          </div>
        </div>
      </div>
    </div>
  );
}
