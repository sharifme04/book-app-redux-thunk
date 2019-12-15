import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BooksRow from './BooksRow';
import { Link } from 'react-router-dom';

const BooksTable = ({books}) =>{ 
  const [select, setSelect] = useState('');
  const handleChange = event => setSelect(event.target.value);
  const updateBook = books.filter(book =>{
    if (book.subjects.length === 1 ) {
      return book.subjects[0].toLowerCase().indexOf( select.toLowerCase() ) !== -1
    }
    else {
      return book.subjects[0].toLowerCase().indexOf( select.toLowerCase() ) !== -1 || 
      book.subjects[1].toLowerCase().indexOf( select.toLowerCase() ) !== -1
    }
  })
  return (
    <div>
      <h2>Books app</h2>
      <hr/>
      <Link to="/addbook"><button type="button" className="btn btn-primary">Add book</button></Link>
      <br/> <br/>
      <form>
        <div className="form-group">
          <label>Select Subject (select one):</label>
          <select className="form-control" value={select} onChange={handleChange}>
              <option value="">Select Subject</option>
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
           </select>
          <hr/>
        </div>
     </form>
      <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Author's name</th>
          <th>Book Title</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {updateBook.map(
          book => <BooksRow book={book} key={book.id}/>
        )}
      </tbody>
    </table>
  </div>
  );    
}

BooksTable.propTypes={
  books:PropTypes.array.isRequired,
}

export default BooksTable;
