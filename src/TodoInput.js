import React from 'react';
import './TodoInput.css'

export default class TodoInput extends React.Component {
	render() {
		return <input typr="text" 
			className = 'TodoInput'
			value={this.props.content} 
			onChange = {this.changeTitle.bind(this)}
			onKeyPress={this.submit.bind(this)}/>

	}

	submit(e){
		if (e.key === "Enter"){
			this.props.onSubmit(e)
		}
	}
}