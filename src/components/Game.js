import React, {Component} from 'react'
import GameBoard from './GameBoard'
import boardFunctions from '../models/eval'

class Game extends Component {
	constructor(){
		super()
		this.state = {
		board: [								//Sets initial board up
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false]
		],
		numOfMines: 10,
		time: 0,
		intervalId: null,
		firstClick: true
	}
		this.newGame();
	}

	adjustDifficulty(){
		let difficulty = document.getElementById("mySelect").value;
		let length; //change to dimension
		let numOfMines;
		if (difficulty === "Beginner"){
			length = 3;
			numOfMines = 1;
		}else if (difficulty === "Intermediate"){
			length = 16;
			numOfMines = 40;
		}else if (difficulty === "Expert"){
			length = 24;
			numOfMines = 80;
		}
		let board = [];
		for(let i=0; i<length; i++){							//fills board with
			let subArr = [];
			for(let j=0; j<length;j++){
				subArr.push(false)
			}
			board.push(subArr)
		}
		this.setState({
			board: board,
			numOfMines: numOfMines
		}, () => this.newGame());
	}

	newGame(){
	let el2 = document.getElementById("Lose")
	if (el2){
		el2.style.display = "none"
	}
	let board = this.state.board
	let numOfMines = this.state.numOfMines;
		for(let i=0; i < board.length; i++){					 //Clears the board of mines
			for (let j=0; j < board[i].length; j++){
			board[i][j] = false;
		}
	}
	let x = 0;
	let y = 0;
	for(let i=0; i < numOfMines; i++){
	x = Math.floor(Math.random() * board.length)			//sets a random mine on the board
	y = Math.floor(Math.random() * board.length)
	if (board[x][y] === true){
	i--;
	} else{
	board[x][y] = true;
	}
	}

	let self = this

	this.state.intervalId = setInterval(function(){
		self.setState(
			{time: self.state.time + 1}
		)},
	1000)

	console.log(this.state.intervalId);
	let elementList = document.querySelectorAll(".col-xs-4")
	elementList.forEach((val) => val.innerHTML = "")
	this.setState({
		board: board,
		numOfMines: numOfMines,
		time: 0,
	})
	}
	render(){
	return(
		<div>
		<div className="container2">
		<GameBoard
			board={this.state.board}
			time={this.state.time}
			numOfMines={this.state.numOfMines}
			// intervalId={this.state.intervalId}
		/>
		<div id="buttons">
		<button onClick={this.newGame.bind(this)}>
		New Game
		</button>
		<select id="mySelect" onChange={this.adjustDifficulty.bind(this)}>
			<option value="">Please select a difficulty level</option>
			<option value="Beginner">Beginner</option>
			<option value="Intermediate">Intermediate</option>
			<option value="Expert">Expert</option>
		</select>
		</div>
		</div>
		</div>
	)
	}
}

export default Game
