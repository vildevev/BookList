import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	state: (state = {}) => state
});

export default rootReducer;

// reducer = a function that returns a piece of the applications state
