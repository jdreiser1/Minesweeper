let boardFunctions = {
		evalMine(evt, index1, position, x){
		let target = document.querySelector(`[data-index="${index1}"]`);
		let counter = 0;
		if (target && !target.innerHTML && x.props.board[position[0]] && x.props.board[position[1]]){
			if (evt && evt.shiftKey){		
				let img = document.createElement("img");
				img.src = "http://www.freeminesweeper.org/images/bombflagged.gif"
				img.border = "0"
				target.appendChild(img);
				// x.setState({numOfMines: x.state.numOfMines - 1});
			}else {
		if (x.props.board[position[0]][position[1]]){ //Check if the element the player picked has a mine
			target.append("X")
			let el = document.getElementById("Lose")
			el.style.display = "block"
		}else{ 
		if (position[0] && x.props.board[position[0]-1][position[1]]){ //Check if the element above the element picked is a space, and has a mine
			counter += 1
		} //now same as above but instead checking top right
		if (position[0] && (position[1] !== x.props.board[0].length-1) && x.props.board[position[0]-1][position[1]+1]){
			counter += 1
		}// now same as above but instead checking right
		if ((position[1] !== x.props.board[0].length-1) && x.props.board[position[0]][position[1]+1]){
			counter += 1
		} // now same as above but instead checking bottom right
		if ((position[0] !== x.props.board[0].length-1) && (position[1] !== x.props.board[0].length-1) && x.props.board[position[0]+1][position[1]+1]){
			counter += 1
		}// now same as above but instead checking bottom
		if ((position[0] !== x.props.board[0].length-1) && x.props.board[position[0]+1][position[1]]){
			counter += 1
		}// now same as above but instead checking bottom left
		if (position[1] && (position[0] !== x.props.board[0].length-1) && x.props.board[position[0]+1][position[1]-1]){
			counter += 1
		}// now same as above but instead checking left
		if (position[1] && x.props.board[position[0]][position[1]-1]){
			counter += 1
		}// now same as above but instead checking top left
		if (position[0] && position[1] && x.props.board[position[0]-1][position[1]-1]){
			counter += 1
		}
		target.append("" + counter)
		x.setState({
			numOfFreeSpaces: x.state.numOfFreeSpaces - 1
		}, () => {
		console.log(x.state.numOfFreeSpaces)
		if (x.state.numOfFreeSpaces === 0){
			console.log("You Won")
			let el2 = document.getElementById("Won")
			el2.style.display = "block"
		}
		if (counter === 0){
			// flag = !flag
			this.evalMine(null, index1 - 1, [position[0],position[1]-1], x)
			this.evalMine(null, index1 - x.props.board[0].length - 1, [position[0]-1, position[1]-1], x)
			this.evalMine(null, index1 - x.props.board[0].length, [position[0]-1, position[1]], x)
			this.evalMine(null, index1 - x.props.board[0].length + 1, [position[0]-1, position[1]+1], x)
			this.evalMine(null, index1 + 1, [position[0], position[1]+1], x)
			this.evalMine(null, index1 + x.props.board[0].length - 1, [position[0]+1, position[1]-1], x)
			this.evalMine(null, index1 + x.props.board[0].length, [position[0]+1, position[1]], x)
			this.evalMine(null, index1 + x.props.board[0].length + 1, [position[0]+1, position[1]+1], x)
		}
	})
}}
}
}
	// startTimer(x){
	// 	// let intervalId = setInterval(
	// 	// 	() => x.setState({time: x.state.time + 1}), 1000);
	// 	console.log(x)
	// 	x.setState({firstClick: false},
	// 		x.setState({intervalId: setInterval(
	// 		() => x.setState({time: x.state.time + 1}), 1000)}))
	// },
}
export default boardFunctions