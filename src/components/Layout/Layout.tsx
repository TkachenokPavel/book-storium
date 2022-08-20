import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Container } from "./styles"

export const Layout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            {/* <Footer></Footer> */}
        </Container>
    )
}
