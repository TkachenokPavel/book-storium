import { Card } from "../Card"
import { StyledBooksList } from "./styles"

interface IProps {
    newBooks: any,
}

export const BooksList = ({ newBooks }: IProps) => {
    console.log(newBooks)
    return (
        <StyledBooksList>
            {newBooks.map(book => <Card book={book} />)}
        </StyledBooksList>
    )
}
