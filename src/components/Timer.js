import React, {Component} from 'react'

class Timer extends Component {
	constructor(props){
		super(props);
		this.state = {
			intervalId: null
		}
		this.startTimer();
	}
	startTimer(){
		// console.log("hit")
		// if (this.props.firstClick){
		// 	console.log(
		// 		"hit2")
		// 	this.state.intervalId = setInterval(function(){ 
		// 		console.log("hit3")
		// 		this.props.time += 1
		// 		}, 1000)
		// }
	}
	render(){
	return(
	<div className="timer">
		{this.props.time}
	</div>
	)
	}
}

export default Timer