import { useEffect, useState } from "react"
import { BooksList } from "../../components"
import { bookAPI } from "../../services/bookApi/bookApi"
import { INewBook } from "../../types/types"
import { StyledHome, Title } from "./styles"


export const Home = () => {
    const [newBooks, setNewBooks] = useState<INewBook[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        bookAPI.getNew().then(response => {
            setNewBooks(response.books)
        });
    }, [])

    return (
        <StyledHome>
            <Title>NEW RELEASES BOOKS</Title>
            <BooksList newBooks={newBooks} isLoading={isLoading} />
        </StyledHome>
    )
}