import { Link } from 'react-router-dom'
import { ROUTE } from '../router/routes'

export const Account = () => {
    return (
        <div>
            <Link to={ROUTE.HOME}>Account</Link>
        </div>
    )
}
