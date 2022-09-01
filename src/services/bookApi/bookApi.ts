import axios from 'axios';

enum BookEndpoint {
    NEW = 'new',
    SEARCH = 'search/',
    DETAIL_BOOK = 'books/'
}

class BookAPI {
    private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOK_API;
    private readonly API = axios.create({
        baseURL: this.BASE_URL,
    });

    public async getNewBooks() {
        const { data } = await this.API.get(BookEndpoint.NEW);
        const newBooks = data.books;

        return newBooks
    };

    public async getBookDetails(isbn: string): Promise<any> {
        const { data } = await this.API.get(`${BookEndpoint.DETAIL_BOOK}/${isbn}`)

        return data;
    };

    public async getSearchedBooks(query: string | undefined, page: string = '1'): Promise<any> {
        const data = await this.API.get(`${BookEndpoint.SEARCH}/${query}/${page}`)

        return data;
    };
}

export const bookAPI = new BookAPI()