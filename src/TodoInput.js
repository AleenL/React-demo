import React from 'react';

export default class TodoInput extends React.Component {
	render() {
		return <input typr="text" defaultValue={this.props.content} onKeyPress={this.submit}/>

	}

	submit(e){
		if (e.key === "Enter"){
			console.log('press Enter')
		}
	}
}