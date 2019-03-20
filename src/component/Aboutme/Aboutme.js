import React from "react";
import Images from "../images/port.jpg";
import './Aboutme.css';

export default function Header() {
  return (
    <div class="about-me" id ="About">
      <h2>about me</h2>

      <div class="col-left">
        <img src={Images} alt="ashley's " />
      </div>

      <div class="col-right">
        <h4>Ashley Pereira</h4>
        <p>
          Hey! Thanks for visiting my page. I’m Ashley a Full Stack Web Developer. I
          am currently enrolled at the Kodiri bootcamp learning and 
          familiarising myself with HTML/CSS, Javascript, Reactjs, Nodejs,
          VisualStudio, GitHub and agile methodology.
        </p>
        <p>
        When I’m not coding, you can find me with my camera in one hand and my 
        eye aiming for the next adventure. I am a BIG foodie and love to experience 
        cuisines from around the world. The street markets in London are one my 
        favourite things in the world. 
        </p>

        <p>
          I have a very keen interest in solution based apps, either by focusing
          on healthcare solutions that can improve people’s lives, or by
          bringing dreams to reality through the magic of entertainment.
        </p>
        <p>Looking for a Full Stack Developer who is keen to learn?</p>
        <a className="scroll" href="#Contact">
              Contact
            </a>
      </div>
    </div>
  );
}
