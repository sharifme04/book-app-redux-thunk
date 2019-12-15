import axios from 'axios';
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

const API_END_POINT = 'http://localhost:3010/books';

export function fetchBooks() {
  return dispatch =>{
      axios.get(API_END_POINT)
      .then( (response)=> {
        console.log(response.data);
        dispatch({
          type:FETCH_BOOKS_SUCCESS,
          books:response.data
        })
      })
      .catch((error)=> {
        dispatch({
          type:  FETCH_BOOKS_FAILURE,
          error:error
        })
      });

  }
}

export function addBook(data) {
  return dispatch => {
   axios.post(API_END_POINT, data)
    .then(response =>{
      dispatch({
        type: ADD_BOOK_SUCCESS,
        book:response.data
      })
    })
    .catch((error)=> {
      dispatch({
        type:  ADD_BOOK_FAILURE,
        error:error
      })
    });

  }
}

export function editBooks(id) {
  return dispatch => {
   axios.get(`${API_END_POINT}/${id}`)
    .then(response =>{
      dispatch({
        type: EDIT_BOOK_SUCCESS,
        book:response.data
      })
    })
    .catch((error)=> {
      dispatch({
        type:  EDIT_BOOK_FAILURE,
        error:error
      })
    });

  }
}

export function updateBooks(id, data) {
  console.log(data);
  return async dispatch => {
   axios.patch(`${API_END_POINT}/${id}`, data)
    .then( async response =>{
      await dispatch({
        type: UPDATE_BOOK_SUCCESS,
        book:response.data
      })
      await dispatch(fetchBooks());
    })
    .catch((error)=> {
      dispatch({
        type:  UPDATE_BOOK_FAILURE,
        error:error
      })
    });
  }

}