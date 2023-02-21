/** IBook Interface */
export interface IBook {
    /** book ID */
    id: string;
    /** book title */
    title: string;
    /** book authers */
    authors: string[];
    /** book shelf */
    shelf: string;
    /** book image link */
    imageLinks: {
        thumbnail: string;
    }
}