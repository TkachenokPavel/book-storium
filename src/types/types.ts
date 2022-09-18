export interface IBookShort {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface IBookDetails {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: IBookFormat;
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}

export interface ICartItem extends IBookDetails {
  amount: number;
}

export interface IBookFormat {
  [key: string]: string;
}

export interface INewBooksResponse {
  error: string | null;
  total: string | null;
  books: IBookShort[];
}

export interface ISearchedBooksResponse extends INewBooksResponse {
  page: string | null;
}

export type theme = "dark" | "light";
