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

    public async getNew(): Promise<any> {
        const { data } = await this.API.get<any>(BookEndpoint.NEW);

        return data
    }
}

export const bookAPI = new BookAPI()