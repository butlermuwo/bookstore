import book from "../../components/Book";

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const handleData = (data) => {
    const books = [];
    const keys = Object.keys(data);

    keys.forEach((key, index) => {
        const book = data[keys[index]];
        book[0].item_id = key;
    });
    return book;
};

// Actions creators

export const addBook = (book) => async (dispatch) => {
    type: ADD_BOOK,
    payload
}
export const removeBook = (bookId) => async (dispatch) =>{
    try {
        await AudioParam.deleteBook(bookId);

        dispatch({type: REMOVE_BOOK,payload: bookId});
    } catch (error) {
        throw new Error(error.message);
    }

};

// REDUCER
const reducer =  (state = [], action) => {
switch (action.type) {
    case ADD_BOOK:
       return [...state, action.payload]

    case REMOVE_BOOK:
return state.filter((book) => book.item_id !== action.payload);

    default:
        return state;
    }
};

export default reducer;