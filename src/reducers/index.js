import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// telling redux how to create our application state
const rootReducer = combineReducers({
	// the mapping of our state
	books: BooksReducer
});

export default rootReducer;

// reducer = a function that returns a piece of the applications state
