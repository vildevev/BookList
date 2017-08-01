// action creater has to be wired up to redux. Binding the action the the component
export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action, an object with a type property
	return {
		// an uppercase
		type: 'BOOK_SELECTED',
		// payload is more information about the action
		payload: book
	};
}
