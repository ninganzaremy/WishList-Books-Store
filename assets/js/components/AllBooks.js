import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AllBooks extends Component {
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
