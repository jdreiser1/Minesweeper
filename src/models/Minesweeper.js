import axios from 'axios'

class MinesweeperModel {
	static show(){
		let request = axios.get("http://localhost:4000/api/minesweeper")
		return request
	}
	static get(mine){
		let request = axios.post("http://localhost:4000/", mine)
		return request
	}
}

export default MinesweeperModel