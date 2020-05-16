import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { closingngMyList } from '../actions/allActions.js';

class MyList extends Component {
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
			<section
				id="myList"
				className={this.props.globalState.listOpen == true ? 'active' : ''}
			>
				<h3>My list of Books</h3>
				<ul>
					<li>
						Harry Potter <span className="delete-btn">Delete</span>
					</li>
				</ul>
				<div className="close-list" onClick={this.props.closingngMyList}>
					{' '}
					Close List
				</div>
			</section>
		);
	}
}
const mapStateToProps = state => {
	console.log(state);
	return state;
};
export default connect(mapStateToProps, {
	closingngMyList
})(MyList);
