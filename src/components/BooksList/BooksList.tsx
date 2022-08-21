import { CSSProperties } from "react";
import { INewBook } from "../../types/types"
import { Card } from "../Card"
import { ErrorMassage, StyledBooksList } from "./styles"
import CircleLoader from "react-spinners/CircleLoader";

interface IProps {
    newBooks: INewBook[],
    isLoading: boolean,
    errorMessage: string
}

const override: CSSProperties = {
    display: "block",
    marginTop: "100px",
}

export const BooksList = ({ newBooks, isLoading, errorMessage }: IProps) => {
    if (isLoading) {
        return (
            <CircleLoader loading={isLoading} cssOverride={override} size={100} />
        )
    }

    if (errorMessage) {
        return (
            <ErrorMassage>Sorry, {errorMessage}</ErrorMassage>
        )
    }

    return (
        <StyledBooksList>
            {newBooks.map(book => <Card book={book} key={book.isbn13} />)}
        </StyledBooksList>
    )
}
