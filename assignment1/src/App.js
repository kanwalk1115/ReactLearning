import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header'
import {Section1} from './Section1'
import {Section2} from './Section2'

class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section2></Section2>
      </div>
    )
  }
}

export default App;
