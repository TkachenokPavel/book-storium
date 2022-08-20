import { useEffect, useState } from "react"
import { BooksList } from "../../components"
import { bookAPI } from "../../services/bookApi/bookApi"
import { StyledHome, Title } from "./styles"


export const Home = () => {
    const [newBooks, setNewBooks] = useState<any[]>([])

    useEffect(() => {
        bookAPI.getNew().then(response => {
            setNewBooks(response.books)
        });
    }, [])

    return (
        <StyledHome>
            <Title>NEW RELEASES BOOKS</Title>
            <BooksList newBooks={newBooks} />
        </StyledHome>
    )
}