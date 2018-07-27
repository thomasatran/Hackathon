import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class ='background'>
        <div class ='dark_filter'>
        </div>
      </div>
        <div class= 'title_container'>
          <div class = 'content'>
            <h1 class='display-1'>Meal Assist</h1>
            <form class='button1' action= '/'>
              <button class= 'btn btn-dark btn-large'>Recipe Suggestion</button>
            </form>
            <form class='button2' action='/'>
              <button class = 'btn btn-dark btn-large'> Grocery Suggestion</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
