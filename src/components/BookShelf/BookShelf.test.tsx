import { screen } from '@testing-library/react';
import React from 'react';
import BookShelf from './BookSelf';
import { providersRender } from '../../store/tests';

describe('BookShelf', () => {
    const bookData = [{
        title: "Learning React",
        authors: ["author1", "author2"],
        imageLinks: {
            thumbnail: "http://books.google.com/books",
        },
        id: "123456",
        shelf: "read",
    }];
    
    test('render book shelf title', () => {
        providersRender(<BookShelf books={bookData} title='title' />);

        const title = screen.queryByText('title');

        expect(title).toBeInTheDocument();
    });

    test("render book component", () => {
        providersRender(<BookShelf books={bookData} title='title' />);

        expect(screen.getAllByRole("listitem")).not.toHaveLength(0);
    });

});