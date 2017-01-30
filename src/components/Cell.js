import React, {Component} from 'react'

class Cell extends Component {

	render(){
	return(
		<div className="col-xs-4" 
			 data-index={this.props.index}
			 onClick={(evt) => this.props.onClick(evt, this.props.index, this.props.position)}>
		</div>
	)

	}
}



export default Cell
