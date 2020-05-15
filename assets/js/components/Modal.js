import React, { Component } from 'react';
export default class Modal extends Component {
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
			<section id="modal">
				<div className="modal-container">
					<div className="close-modal">
						<i className="fas fa-times" />
					</div>
					<div className="modal-grid">
						<div className="images">
							<div
								className="cover"
								style={{
									backgroundImage: `url('https://books.google.com/books/content/images/frontcover/YbtNDwAAQBAJ?fife=w200-h300')`
								}}
							/>
						</div>
						<div className="info">
							<h2>Title</h2>
							<div className="info-line">
								<span className="bold">Author :</span>
								Michelle Obama
							</div>
							<div className="info-line">
								<span className="bold">Genre:</span>
								Memoir
							</div>
							<div className="info-line">
								<span className="bold">Published:</span>
								2018
							</div>
							<p className="review">
								Becoming (book) Becoming is the memoir of former United States
								first lady Michelle Obama published in 2018. ... The book is
								published by Crown and was released in 24 languages. One million
								copies were donated to First Book, an American nonprofit
								organization which provides books to children.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
