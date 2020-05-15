import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
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

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
