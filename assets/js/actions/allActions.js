export const addingBook = book => {
	return {
		type: 'ADD_BOOK',
		payload: book
	};
};

export const removingBook = bookTitle => {
	return {
		type: 'REMOVE_BOOK',
		payload: bookTitle
	};
};

export const openingInfoBook = book => {
	return {
		type: 'OPEN_INFO_BOOK',
		payload: book
	};
};
export const closingInfoBook = book => {
	return {
		type: 'CLOSE_OPEN_BOOK',
		payload: book
	};
};
export const openingMyList = () => {
	return {
		type: 'OPEN_MY_LIST'
	};
};
export const closingngMyList = () => {
	return {
		type: 'OPEN_MY_LIST'
	};
};
