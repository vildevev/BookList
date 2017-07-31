import React, { Component } from 'react';
import BookList from '../containers/book-list';

export default class App extends Component {
	render() {
		return (
			<div>
				<BookList />
			</div>
		);
	}
}

// Redux serves to construct the application state
// React provides the views to display that state
// they are inherently disconnected. Use 'react-redux' library to connect them
