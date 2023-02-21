import { IBook } from "../models/Book.model";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
    read: [],
    wantToRead: [],
    currentlyReading: [],
    none: [],
    searchResult: []
};

export const booksSlice = createSlice({
    name: 'booksSlice',
    initialState,
    reducers: {
        currentlyReading: (state: any, action: PayloadAction<IBook>) => {
            return {
                ...state,
                currentlyReading: [...state.currentlyReading, action.payload],
            };
        },
        wantToRead: (state: any, action: PayloadAction<IBook>) => {
            return {
                ...state,
                wantToRead: [...state.wantToRead, action.payload],
            };
        },
        read: (state: any, action: PayloadAction<IBook>) => {
            return {
                ...state,
                read: [...state.read, action.payload],
            };
        },
        none: (state: any, action: PayloadAction<IBook>) => {
            return {
                ...state,
                none: [...state.none, action.payload],
            };
        },
        resetShelf: (state: any, action: PayloadAction<{ currentShelf: any, nextShelf: any, book: IBook }>) => {
            const currentShelfState = JSON.parse(JSON.stringify(state[action.payload.currentShelf]));
            const nextShelfState = JSON.parse(JSON.stringify(state[action.payload.nextShelf]));
            
            if(currentShelfState.length > 0) {
                const bookIndex = currentShelfState.findIndex((book: IBook) => {
                    return book.id === action.payload.book.id;
                });
                currentShelfState.splice(bookIndex, 1);
            }

            return {
                ...state,
                [action.payload.currentShelf]: [...currentShelfState],
                [action.payload.nextShelf]: [...nextShelfState, action.payload.book],
            };
        },
        resetAllShelves: (state: any) =>{
            return {
                ...state,
                currentlyReading: [],
                wantToRead: [],
                read: []
            };
        },
        updateSearchResult: (state: any, action: PayloadAction<IBook[]>) => {
            return {
                ...state,
                searchResult: [...action.payload],
            };
        },
        resetSearchResult: (state: any) => {
            return {
                ...state,
                searchResult: [],
            };
        }
    }
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;