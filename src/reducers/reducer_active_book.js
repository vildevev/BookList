// State argument is not application state, only the state this reducer is responsible for
// set state default to null
export default function(state = null, action) {
	// switch statements that checks actions type
	switch (action.type) {
		case 'BOOK_SELECTED':
			// always want to return 'fresh object'
			return action.payload;
	}

	return state;
}
