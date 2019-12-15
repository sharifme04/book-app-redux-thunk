import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BooksForm from './BooksForm';
import {editBooks, updateBooks } from '../redux/actions/books';
import {options} from './formOjbect';

const BooksEdit = (props) => {
  const id = props.match.params.id;
  const [inputValues, setInputValues] = useState(options);
  
  useEffect(() => {
    props.editBooks(id);
  }, []);

   useEffect(() => {
    if (props.book) {
      setInputValues({
        id: props.book.id,
        title: props.book.title,
        name: props.book.authors[0].name,
        birthYear: props.book.authors[0].birth_year,
        deathYear: props.book.authors[0].death_year,
        shelves1:props.book.bookshelves[0],
        shelves2: props.book.bookshelves[1],
        downloadCount: props.book.download_count,
        subjects: props.book.subjects[0],
        mediaType: props.book.media_type,
        languages: props.book.languages[0],
        formats1: props.book.formats['text/plain; charset=utf-8'],
        formats2: props.book.formats['application/pdf'],
        formats3: props.book.formats['application/rdf+xml'],
        formats4: props.book.formats['application/x-mobipocket-ebook'],
        formats5: props.book.formats['application/epub+zip'],
        formats6: props.book.formats['text/plain; charset=us-ascii'],
        formats7: props.book.formats['text/html; charset=utf-8'],
       });
    }

  }, [props.book]); 

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
    props.updateBooks(id, bookData);
    props.history.push('/');
    setInputValues(options)
  }
    return (
    <BooksForm {...props} {...inputValues}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        buttonName= 'Update'
    />
  );
}

BooksEdit.propTypes={
  books:PropTypes.object
}

const mapStateToProps = state=>{
  return {
    book: state.books.book
  }
};
const mapDispatchToProps = dispatch =>{
  return {
    editBooks: (value)=> dispatch(editBooks(value)),
    updateBooks: (value1, value2)=> dispatch(updateBooks(value1, value2))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksEdit) ;

