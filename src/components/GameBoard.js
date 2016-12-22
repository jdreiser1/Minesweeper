import React, {Component} from 'react'
import Cell from './Cell'
import boardFunctions from '../models/eval'

class GameBoard extends Component {
	clickOn(evt, index1, position){
		console.log(index1)
		console.log(this.props.board)
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
 		{cells}
 		</div>
 		</div>
	)
	}
}

export default GameBoard