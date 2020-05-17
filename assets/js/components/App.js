import React, { Component } from 'react';
import AllBooks from './AllBooks.js';
import MyList from './MyList.js';
import { connect } from 'react-redux';
import { openingMyList } from '../actions/allActions.js';

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
				<div className="logo">
					<h1>MyList</h1>
				</div>
				<div className="container">
					<div className="home">
						<div className="box">
							<div className="content-area">
								<div className="info-section">
									<h1>Welcome to MyList Book Store</h1>
									<h4>Click on your favourite Book </h4>
									<div className="call-actions">
										<i className="action-ghost-btn">Enjoy :)</i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="open-list" onClick={this.props.openingMyList}>
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
export default connect(mapStateToProps, { openingMyList })(App);
