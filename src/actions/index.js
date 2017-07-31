// action creater has to be wired up to redux. Binding the action the the component
export function selectBook(book) {
	console.log('A book has been selected:', book.title);
}
