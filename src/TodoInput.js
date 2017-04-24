import React from 'react';
import './TodoInput.css'

export default class TodoInput extends React.Component {
	render() {
		return (
			<div>
			<input typr="text" 
			className = 'TodoInput'
			defaultValue={this.props.content} 
			onKeyPress={this.submit.bind(this)}/>
			</div>
		)
	}

	submit(e){
		if (e.key === "Enter"){
			this.props.onSubmit(e)
		}
	}
}