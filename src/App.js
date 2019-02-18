import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
