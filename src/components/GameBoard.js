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
			mineSet: this.props.mineSet,
			numOfMines: this.props.numOfMines,
			minesLeftToWin: this.props.numOfMines,
			numOfFreeSpaces: (this.props.board.length * this.props.board.length) - this.props.numOfMines
		}
	}
	componentWillReceiveProps(nextProps) {
	  // You don't have to do this check first, but it can help prevent an unneeded render
	  if (nextProps.numOfMines !== this.state.numOfMines && this.state.mineSet) {
	    this.setState({ numOfMines: nextProps.numOfMines })
	  }
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
 		<div id="scoreboard">
 		<div className="numOfMines">
		<div>Num of Mines</div>
 		{this.props.numOfMines}
 		</div>
 		<Timer time={this.props.time} />
 		</div>
		<div className="container">
		{cells}
		</div>
 		</div>
	)
	}
}

export default GameBoard
