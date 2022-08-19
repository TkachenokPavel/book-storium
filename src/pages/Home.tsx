import { Link } from "react-router-dom"
import { routes } from "../router/routes"


export const Home = () => {
    return (
        <div>
            <Link to={routes.ACCOUNT}>Account</Link>
        </div>
    )
}