import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js'

class App extends Component {
  render() {
    return (
      <div className="App" id="font">
      <h1>Minesweeper</h1>
 		<div id="Lose">
 			You Lose!!!
 		</div>
      	<Game />
      </div>
    );
  }
}

export default App;
