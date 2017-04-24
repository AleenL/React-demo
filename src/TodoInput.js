import React from 'react';

export default class TodoInput extends React.Component {
	render() {
		return <input typr="text" value={this.props.content} />
	}
}