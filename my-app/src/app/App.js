import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '../container/container.js';
import TopBar from '../bars/topbar.js';
import BottomBar from '../bars/bottombar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Container/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
