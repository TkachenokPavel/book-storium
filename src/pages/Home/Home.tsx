import { useEffect, useState } from "react"
import { BooksList, Title } from "../../components"
import { bookAPI } from "../../services"
import { INewBook } from "../../types/types"
import { StyledHome } from "./styles"


export const Home = () => {
    const [newBooks, setNewBooks] = useState<INewBook[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        bookAPI.getNewBooks()
            .then(newBooksResponse => {
                setNewBooks(newBooksResponse.books)
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
            .finally(() => {
                setIsLoading(false);
                setErrorMessage('')
            });
    }, [])

    return (
        <StyledHome>
            <Title title='NEW RELEASES BOOKS' />
            <BooksList newBooks={newBooks} isLoading={isLoading} errorMessage={errorMessage} />
        </StyledHome>
    )
}