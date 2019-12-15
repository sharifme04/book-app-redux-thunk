import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addBook } from '../redux/actions/books';
import BooksForm from './BooksForm';
import {options} from './formOjbect';

const BooksNew = (props) => {
  const [inputValues, setInputValues] = useState(options);

  const handleChange = (event) =>{
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const bookData = {
        id: inputValues.id,
        authors : [
          {
            birth_year: inputValues.birthYear,
            death_year: inputValues.deathYear,
            name: inputValues.name
          }
        ],
        bookshelves: [ inputValues.shelves1, inputValues.shelves2],
        download_count: inputValues.downloadCount,
        formats: {
          'text/plain; charset=utf-8': inputValues.formats1,
          'application/pdf': inputValues.formats2,
          'application/rdf+xml': inputValues.formats3,
          'application/x-mobipocket-ebook': inputValues.formats4,
          'application/epub+zip': inputValues.formats5,
          'text/plain; charset=us-ascii': inputValues.formats6,
          'text/html; charset=utf-8': inputValues.formats7
        },
        languages: [inputValues.languages],
        media_type: inputValues.mediaType,
        subjects: [ inputValues.subjects],
        title: inputValues.title
      }
    props.addBook(bookData);
    props.history.push('/');
    setInputValues(options)
  }

  return (
    <BooksForm {...props} {...inputValues}
      handleChange = {handleChange}
      handleSubmit = {handleSubmit}
      buttonName= 'Add New'
    />
  );
}
export default connect(null, {addBook})(BooksNew) ;
