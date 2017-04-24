import React from 'react';
import './TodoInput.css'

export default class TodoInput extends React.Component {
	render() {
		return (
			<div className = 'TodoInput'>
			<input typr="text" 
			defaultValue={this.props.content} 
			/>
			<button onClick={this.submit.bind(this)}>确认</button>
			</div>
		)
	}

	submit(e){
		if (e.onClick === true){
			this.props.onSubmit(e)
		}
	}
}