//import React, { Component } from 'react';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import {fetchBooks} from './components/redux/actions/books';
import BooksTable from './components/templates/BooksTable';
import BooksEdit from './components/templates/BooksEdit';
import Booksnew from './components/templates/BooksNew';

const App = (props)=>{
  useEffect(() => {
    props.fetchBooks();
  },[]);

    return (
      <BrowserRouter >
        <div className="container">
          <Route exact  path="/" render={()=> (
                  <BooksTable {...props}/>
              )}/>
          <Route path="/addbook" component={Booksnew}/>
          <Route  path="/edit/:id" render={(props)=> (
                  <BooksEdit  {...props}/>
              )}/>
        </div>
      </BrowserRouter >
    );
}

App.propTypes={
  fetchBooks:PropTypes.func.isRequired
}

const mapStateToProps = state=>{
  return {
    books: state.books.books
  }
};

export default connect(mapStateToProps,{fetchBooks})(App);
