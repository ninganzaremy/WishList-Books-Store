import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openingInfoBook } from '../actions/allActions.js';

class AllBooks extends Component {
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
			<section className="all-books">
				<div className="book-container">
					<div
						onClick={this.props.openingInfoBook}
						className="book"
						style={{
							backgroundImage: `url('https://books.google.com/books/content/images/frontcover/YbtNDwAAQBAJ?fife=w200-h300')`
						}}
					/>
				</div>
			</section>
		);
	}
}
const mapStateToProps = state => {
	console.log(state);
	return state;
};
export default connect(mapStateToProps, { openingInfoBook })(AllBooks);
