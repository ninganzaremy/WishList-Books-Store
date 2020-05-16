import React, { Component } from 'react';
import AllBooks from './AllBooks.js';
import MyList from './MyList.js';
import { connect } from 'react-redux';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Remy'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div
				id="approot"
				className={this.props.globalState.popupOpen == true ? 'popupOpen' : ''}
			>
				<div className="container">
					<div className="open-list">
						<i className="fas fa-bars" />
					</div>
					<AllBooks />
				</div>
				<MyList />
			</div>
		);
	}
}
const mapStateToProps = state => {
	console.log(state);
	return state;
};
export default connect(mapStateToProps)(App);
