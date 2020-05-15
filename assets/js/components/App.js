import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Remy'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return <div className="home">this is home page</div>;
	}
}
