export const addingBook = book => {
	return {
		type: 'ADD_BOOK',
		payload: book
	};
};

export const removingBook = book => {
	return {
		type: 'REMOVE_BOOK',
		payload: book
	};
};

export const openingInfoBook = book => {
	return {
		type: 'OPEN_BOOK',
		payload: book
	};
};
export const closingInfoBook = book => {
	return {
		type: 'CLOSE_OPEN_BOOK',
		payload: book
	};
};
export const openingMylist = () => {
	return {
		type: 'OPEN_MY_LIST'
	};
};
export const closingngMylist = () => {
	return {
		type: 'OPEN_MY_LIST'
	};
};
