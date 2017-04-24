import React from 'react';

export default class TodoInput extends React.Component {
	render() {
		return <input typr="text" defaultValue={this.props.content} />
	}
}