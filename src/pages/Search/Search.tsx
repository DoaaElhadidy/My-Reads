import React from "react";
import './Search.css';
import { Link } from "react-router-dom";
import { search, getAll } from "../../api/BooksAPI";
import { booksActions } from "../../reducers/Book.reducer";
import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../models/Book.model";
import Book from "../../components/Book/Book";

const Search = () => {

    const dispatch = useDispatch();

    const searchResult = useSelector((state: any) => state.books.searchResult);

    const searchHandler = (e: any) => {
        if(e.target.value){
            search(e.target.value).then(searchedBooks => {
                if (searchedBooks && searchedBooks.length > 0) {
                    getAll().then((books: IBook[]) => {
                        books.map(book => {
                            searchedBooks.map((searchedBook: IBook) => {
                                if (searchedBook.id === book.id) {
                                    searchedBook['shelf'] = book['shelf'];
                                }
                            })
                        })
                        dispatch(booksActions.updateSearchResult(searchedBooks));
                    })
                } else {
                    dispatch(booksActions.resetSearchResult());
                };
            });
        } else {
            dispatch(booksActions.resetSearchResult());
        };
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'></Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title, author, or ISBN" onChange={(e) => searchHandler(e)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {searchResult.length > 0 && <li>{searchResult.map((book: IBook, i: number) => <Book book={book} key={i} />)}</li>}
                {(!searchResult || searchResult.length === 0) && <h2>No Books Found</h2>}
                </ol>
            </div>
        </div>
    )
}

export default Search;