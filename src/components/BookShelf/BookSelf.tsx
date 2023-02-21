import React from 'react';
import Book from '../Book/Book';
import './BookSelf.css';
import { IBook } from '../../models/Book.model';

const BookShelf = (props: { books: IBook[], title: string }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        {props.books.length > 0 &&
          <ol className="books-grid">
            <li>
              {props.books.map((book: IBook, i: number) => <Book book={book} key={i} />)}
            </li>
          </ol>
        }
        {
          props.books.length === 0 && <h3>No books to show in <span>{props.title}</span> shelf</h3>
        }
      </div>
    </div>
  )
}

export default BookShelf;