import React from 'react';
import './Book.css';
import { IBook } from '../../models/Book.model';
import { useDispatch } from 'react-redux';
import { booksActions } from '../../reducers/Book.reducer';
import { update } from '../../api/BooksAPI';
import { constants } from '../../models/constants';

const Book = (props: { book: IBook, key: number }) => {
    const dispatch = useDispatch();

    const changeShelfHandler = (e: any, book: IBook) => {
        const bookUpdatedShelf = { ...book, shelf: e.target.value };

        update(book, e.target.value).then();

        dispatch(booksActions.resetShelf({currentShelf: book.shelf, nextShelf:e.target.value, book: bookUpdatedShelf}));
    }
    
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${props.book?.imageLinks?.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select data-testid='select' value={props.book.shelf || 'none'} onChange={(e) => changeShelfHandler(e, props.book)}>
                        <option value="moveTo" disabled>Move to...</option>
                        <option value="currentlyReading">{props.book.shelf === constants.currentlyReading && `✓`} Currently Reading</option>
                        <option value="wantToRead">{props.book.shelf === constants.wantToRead && `✓`} Want to Read</option>
                        <option value="read">{props.book.shelf === constants.read && `✓`} Read</option>
                        <option value="none">{(!props.book.shelf || props.book.shelf === constants.none) && `✓`} None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            {props.book.authors?.map((author, i) => <div className="book-authors" key={i}>{author}</div>)}
        </div>
    )
}
                    
export default Book;