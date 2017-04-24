import React from 'react';

class Todo extends React.Component {
	render() {
		return <input typr="text" value={this.props.content} />
	}
}