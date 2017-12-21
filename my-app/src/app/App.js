import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from '../container/container.js';
import TopBar from '../bars/topbar.js';
import BottomBar from '../bars/bottombar.js';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <TopBar/>
          <Route path="/" exact component={ Container } />
          <BottomBar/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
