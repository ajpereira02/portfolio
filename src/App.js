import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Aboutme from './component/Aboutme/Aboutme';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Aboutme />
      </div>
    );
  }
}

export default App;
