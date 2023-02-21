import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Book from './Book';
import { providersRender } from '../../store/tests';
import { update } from '../../api/BooksAPI';

describe('Book', () => {
    const bookData = {
        title: "Learning React",
        authors: ["author1", "author2"],
        imageLinks: {
            thumbnail: "http://books.google.com/books",
        },
        id: "123456",
        shelf: "read",
    };
    test('display title, authors and image', () => {
        providersRender(<Book book={bookData} key={0} />);

        const title = screen.queryByText('Learning React');
        const author = screen.queryByText('author1');
        const thumbnail= screen.queryByText(bookData.imageLinks.thumbnail);

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(thumbnail).toBeDefined();
    });

    // test('call changeShelfHandler on selection change', () => {
    //     // Arrange
    //     const upsadeShelf = jest.fn();
        
    //     providersRender(<Book book={bookData} key={0} />);

    //     // Act
    //     const select = screen.getByTestId('select');
    //     fireEvent.change(select, { target: { value: 'wantToRead' } })

    //     // Assert
    //     expect(upsadeShelf).toHaveBeenCalledWith(bookData, 'read');
    // });
});