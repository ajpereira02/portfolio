import React from "react";
import './Projects.css';

export default function Header() {
  return (
    <div class="my-projects">
      <h2>Projects</h2>
      <div class="project1">
        <div class="overlay">
          <a href="https://kodflix-ashley.herokuapp.com/" target="_blank" rel='noreferrer noopener'>VIEW PROJECT</a>
        </div>
      </div>
      <div class="project2">
        <div class="overlay">
          <a href="https://koinalysis.herokuapp.com/" target="_blank" rel='noreferrer noopener'>VIEW PROJECT</a>
        </div>
      </div>
      <div class="project3">
        <div class="overlay">
          <a href="https://github.com/ajpereira02" target="_blank" rel='noreferrer noopener'>MORE ON GitHub</a>
        </div>
      </div>
    </div>
  );
}
