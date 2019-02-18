import React, { Component } from "react";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import Aboutme from "./component/Aboutme/Aboutme";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Contacts from "./component/Contacts/Contacts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Aboutme />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    );
  }
}

export default App;