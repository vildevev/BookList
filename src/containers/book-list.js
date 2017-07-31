import React, { Component } from 'react';
// use react-redux library to combine React and Redux which are separate
import { connect } from 'react-redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li key={book.title} className="list-group-item">
					{book.title}
				</li>
			);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// take our application state as an argument, whatever gets returns will show up as props in BookList
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

// take this component and function, return a container
// The 'glue' between React and Redux
export default connect(mapStateToProps)(BookList);

// we want the most parent component that cares about a particular piece of state to be a container
// app doesnt care about list of books. Only book-list does
// containers have direct connection to Redux
// If app state changes, the container will automatically rerender
