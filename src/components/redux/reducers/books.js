import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  EDIT_BOOK_SUCCESS,
  EDIT_BOOK_FAILURE,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
}   from '../actionTypes/booksType';

const initialState = {
  books: [],
  error: null
}
export default function books(state = initialState, action) {
   switch (action.type) {
     case FETCH_BOOKS_SUCCESS:
        return {
          ...state,
          books: action.books
        };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        error: action.error
      };
      case ADD_BOOK_SUCCESS:
        return {
          ...state,
          books: [...state.books, action.book]
        };
      case ADD_BOOK_FAILURE:
        return {
          ...state,
          error: action.error
        };
    case EDIT_BOOK_SUCCESS:
        return {
          ...state,
          book: action.book
        };
    case EDIT_BOOK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case UPDATE_BOOK_SUCCESS:
         return {
          ...state,
          book: action.book
        }; 
    case UPDATE_BOOK_FAILURE:
      return {
        ...state,
        error: action.error
      };
        default:
         return state;
      }
    }
