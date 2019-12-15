import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BooksRow(props) {
  return(
      <tr>
        <td>{props.book.id}</td>
        <td>{props.book.authors[0].name}</td>
        <td>{props.book.title}</td>
        <td><Link to={`/edit/${props.book.id}`}><button type="button" className="btn btn-info">Edit/Details</button></Link></td>
      </tr>
  )
};

BooksRow.propTypes={
  book:PropTypes.object.isRequired
}

export default BooksRow;
