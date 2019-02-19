import React from "react";
import './Aboutme.css';

export default function Header() {
  return (
    <div class="about-me">
      <h2>about me</h2>

      <div class="col-left">
        <img src="../images/springboard.jpg" alt="ashley photo" />
      </div>

      <div class="col-right">
        <h4>Ashley Pereira</h4>
        <p>
          Hey! thanks for visiting my page. I’m Ashley a Full Web Stack Developer. I
          am currently enrolled at the Kodiri bootcamp learning and getting
          familiarising myself with HTML/CSS, Javascript, Reactjs, Nodejs,
          VisualStudio, GitHub and agile methodology.
        </p>
        <p>
          When I am not coding I like to explore the city for new food markets
          in London, and other cities when I travel. Sharpening my photography
          skills, reading articles on latest technologies, socialising with my
          friends and family.
        </p>

        <p>
          I have a very keen interest in solution based apps, either by focusing
          on healthcare solutions that can improve people’s lives, or by
          bringing dreams to reality through the magic of entertainment.
        </p>
        <p>Looking for a Full Stack Developer who is keen to learn?</p>
        <a href="">CONTACT ME</a>
      </div>
    </div>
  );
}
