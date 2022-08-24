import { ReactNode } from "react"
import { Link, useMatch } from "react-router-dom"
import { ROUTE } from "../../router/routes"

interface IProps {
    to: ROUTE,
    children: ReactNode
}

export const CustomLink = ({ to, children }: IProps) => {
    const isActive = useMatch(to);

    return (
        <Link to={to}>
            {children}
        </Link>
    )
}
