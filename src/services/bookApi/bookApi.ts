import axios from 'axios';
import { IBookDetails, IBookShort } from '../../types/types';

enum BookEndpoint {
    NEW = 'new',
    SEARCH = 'search/',
    DETAIL_BOOK = 'books/'
}

interface NewBooksResponse {
    error: string,
    total: string,
    books: IBookShort[]
}

interface SearchedBooksResponse extends NewBooksResponse {
    page: string
}

class BookAPI {
    private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOK_API;
    private readonly API = axios.create({
        baseURL: this.BASE_URL,
    });

    public async getNewBooks() {
        const { data } = await this.API.get<NewBooksResponse>(BookEndpoint.NEW);

        return data.books
    };

    public async getBookDetails(isbn: string) {
        const { data } = await this.API.get<IBookDetails>(`${BookEndpoint.DETAIL_BOOK}/${isbn}`)

        return data;
    };

    public async getSearchedBooks(query: string, page: string = '1') {
        const { data } = await this.API.get<SearchedBooksResponse>(`${BookEndpoint.SEARCH}/${query}/${page}`)

        return data;
    };
}

export const bookAPI = new BookAPI()