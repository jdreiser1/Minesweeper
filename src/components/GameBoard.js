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
			firstClick: this.props.firstClick,
		}
		this.intervalId = null
	}

	clickOn(evt, index1, position){
		console.log("jonnyboyclick")
		if (this.state.firstClick){
			boardFunctions.startTimer(this);
		}
		// let mine = [evt, index1, position]
		// MinesweeperModel.create(mine)
		// MinesweeperModel.show();
		// socket.emit('mine click', {evt, index1, position1, this})
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
 		<div className="container2">
 		<div className="scoreboard">
 		<div className="numOfMines">
 		{this.props.numOfMines}
 		</div>
 		<Timer firstClick={this.state.firstClick} time={this.props.time} />
 		</div>
 		{cells}
 		</div>
 		</div>
	)
	}
}

export default GameBoard