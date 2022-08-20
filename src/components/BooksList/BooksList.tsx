import { INewBook } from "../../types/types"
import { Card } from "../Card"
import { StyledBooksList } from "./styles"

interface IProps {
    newBooks: INewBook[],
}

export const BooksList = ({ newBooks }: IProps) => {
    console.log(newBooks)
    return (
        <StyledBooksList>
            {newBooks.map(book => <Card book={book} key={book.isbn13} />)}
        </StyledBooksList>
    )
}
