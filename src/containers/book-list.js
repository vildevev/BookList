import React, { Component } from 'react';
// use react-redux library to combine React and Redux which are separate
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// use to make sure action created flows through all the redusers in the app
import { bindActionCreators } from 'redux';
class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item"
				>
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

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called the result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// take this component and function, return a container
// The 'glue' between React and Redux
// promote BookList from a component to a container
// - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// we want the most parent component that cares about a particular piece of state to be a container
// app doesnt care about list of books. Only book-list does
// containers have direct connection to Redux
// If app state changes, the container will automatically rerender
