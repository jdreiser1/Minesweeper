import React, {Component} from 'react'
import GameBoard from './GameBoard'

class Game extends Component {
	constructor(){
		super()
		this.state = {
		board: [								//Sets the board up
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false]
		],
		numOfMines: 10
	}	
		this.newGame();
	}

	adjustDifficulty(){
		let difficulty = document.getElementById("mySelect").value;
		let length; //change to dimension
		let numOfMines;
		if (difficulty === "Beginner"){
			length = 8;
			numOfMines = 10;
		}else if (difficulty === "Intermediate"){
			length = 16;
			numOfMines = 40;
		}else if (difficulty === "Expert"){
			length = 32;
			numOfMines = 99;
		}
		let board = [];
		for(let i=0; i<length; i++){
			let subArr = [];
			for(let j=0; j<length;j++){
				subArr.push(false)
			}
			board.push(subArr)
		}
		this.state.board = board;
		this.state.numOfMines = numOfMines;
		this.forceUpdate();
		this.newGame();
		console.log(this.state.board)
	}

	newGame(){
		for(let i=0; i < this.state.board.length; i++){					 //Clears the board of mines
			for (let j=0; j < this.state.board[i].length; j++){
			this.state.board[i][j] = false;
		}
	}
	let x = 0;
	let y = 0;
	for(let i=0; i < this.state.numOfMines; i++){
	x = Math.floor(Math.random() * this.state.board.length)			//sets a random mine on the board
	y = Math.floor(Math.random() * this.state.board.length)
	if (this.state.board[x][y] === true){
	i--;
	} else{
	this.state.board[x][y] = true;
	}
	}
	this.forceUpdate()
	let elementList = document.querySelectorAll('.col-xs-4')
	for (let i = 0; i < elementList.length; i++){
			elementList[i].innerHTML = ""
		}
	}
	render(){
	return(
		<div>
		<GameBoard board={this.state.board} />
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
	)
	}
}

export default Game