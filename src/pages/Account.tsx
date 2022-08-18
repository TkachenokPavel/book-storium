import { Link } from 'react-router-dom'
import { routes } from '../router/routes'

export const Account = () => {
    return (
        <div>
            <Link to={routes.HOME}>Home</Link>
        </div>
    )
}
