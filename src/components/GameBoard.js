import React, {Component} from 'react'
import Cell from './Cell'
import boardFunctions from '../models/eval'
// import MinesweeperModel from '../models/Minesweeper'
import Timer from './Timer'


// var socket = io();

class GameBoard extends Component {					//when refactoring make this presentational
	constructor(props){
		super(props)
		this.state = {
			// time: this.props.time,
			numOfMines: this.props.numOfMines,
			numOfFreeSpaces: (this.props.board.length * this.props.board.length) - this.props.numOfMines
		}
		this.intervalId = null
	}

	clickOn(evt, index1, position){
		boardFunctions.evalMine(evt, index1, position, this);
	}
	render(){
		let n = -1;
		let cells = this.props.board.map ( (arr, i) => {
			return (
				<div key={i} className="row">
				{arr.map((boolean, j) => {
					n++;
					return (
						<Cell key={j} index={n} position={[i, j]} onClick={this.clickOn.bind(this)} />
					)
				})}
				</div>
			)
		})
	return(
		<div className="box">
		<h2>Minesweeper</h2>
 	// 	<div className="container2">
 		<div className="scoreboard">
 		<div className="container3">
 		<div>Num Of Mines</div>
 		<div className="numOfMines">
 		{this.props.numOfMines}
 		</div>
 		</div>
 		<div>Timer</div>
 		<Timer time={this.props.time} />
 		</div>
 		</div>
 		{cells}
 		</div>
	)
	}
}

export default GameBoard
