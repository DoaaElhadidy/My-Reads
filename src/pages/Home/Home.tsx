import React, { useEffect } from 'react';
import BookSelf from '../../components/BookShelf/BookSelf';
import { Link } from 'react-router-dom';
import './Home.css';
import { getAll } from '../../api/BooksAPI';
import { IBook } from '../../models/Book.model';
import { useDispatch, useSelector } from 'react-redux';
import { booksActions } from '../../reducers/Book.reducer';
import { constants } from '../../models/constants';

const Home = () => {
  const dispatch = useDispatch();

  const currentlyReading = useSelector(
    (state: any) => state.books.currentlyReading
  );

  const wantToRead = useSelector(
    (state: any) => state.books.wantToRead
  );

  const read = useSelector(
    (state: any) => state.books.read
  );
  
  useEffect(() => {
    getAll().then((books: IBook[]) => {
      books.forEach((book: IBook) => {
        if (book.shelf === constants.currentlyReading) {
          dispatch(booksActions.currentlyReading(book));
        } else if (book.shelf === constants.wantToRead) {
          dispatch(booksActions.wantToRead(book));
        } else if (book.shelf === constants.read) {
          dispatch(booksActions.read(book));
        } 
      })
    })
    return () => {
      dispatch(booksActions.resetAllShelves());
    }
  }, [dispatch]);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookSelf books={currentlyReading} title='Currently Reading' />
            <BookSelf books={wantToRead} title='Want To Read' />
            <BookSelf books={read} title='Read' />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add Book</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;