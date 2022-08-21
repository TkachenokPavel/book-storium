import { INewBook } from "../../types/types"
import { Card } from "../Card"
import { StyledBooksList } from "./styles"
import ClipLoader from "react-spinners/ClipLoader";

interface IProps {
    newBooks: INewBook[],
    isLoading: boolean
}

export const BooksList = ({ newBooks, isLoading }: IProps) => {
    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <StyledBooksList>
            {newBooks.map(book => <Card book={book} key={book.isbn13} />)}
        </StyledBooksList>
    )
}
