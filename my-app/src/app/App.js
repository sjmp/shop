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
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <TopBar/>
        <Container/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
