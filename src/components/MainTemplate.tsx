import { Outlet } from "react-router-dom"

export const MainTemplate = () => {
    return (
        <div>
            <h1>Menu</h1>
            <Outlet />
        </div>
    )
}
