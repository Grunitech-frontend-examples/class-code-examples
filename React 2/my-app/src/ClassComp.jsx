import React from "react";

export default class ClassComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}

	increase() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}

	render() {
		return (
			<div>
				My counter: {this.state.counter}
				<button onClick={this.increase}>Add</button>
			</div>
		);
	}
}
