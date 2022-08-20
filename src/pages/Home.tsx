import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { routes } from "../router/routes"
import { bookAPI } from "../services/bookApi/bookApi"


export const Home = () => {
    const [newBooks, setNewBooks] = useState<any[]>([])

    useEffect(() => {
        bookAPI.getNew().then(books => {
            setNewBooks(books)
        });
    }, [])

    return (
        <div>
            <Link to={routes.ACCOUNT}>Account</Link>
        </div>
    )
}