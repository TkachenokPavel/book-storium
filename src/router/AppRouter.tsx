import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home, BookDetails, Cart, Account, Favorites, Reset, Authentication, Search, NotFound } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ROUTE } from "./routes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTE.HOME} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={ROUTE.SEARCH} element={<Search />} />
                <Route path={ROUTE.BOOK_DETAILS} element={<BookDetails />} />
                <Route path={ROUTE.RESET} element={<Reset />} />
                <Route path={ROUTE.AUTHENTICATION} element={<Authentication />} />
                <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path={ROUTE.CART} element={<Cart />} />
                    <Route path={ROUTE.ACCOUNT} element={<Account />} />
                    <Route path={ROUTE.FAVORITES} element={<Favorites />} />
                </Route>
            </Route>
        </Routes>
    )
}
