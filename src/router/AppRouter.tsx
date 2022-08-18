import { Routes, Route } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { Home, Book, Cart, Account, Favorites, Reset, SignIn, Search, NotFound } from "../pages";
import { routes } from "./routes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.HOME} element={<MainTemplate />}>
                <Route index element={<Home />} />
                <Route path={routes.SEARCH} element={<Search />} />
                <Route path={routes.BOOK} element={<Book />} />
                <Route path={routes.CART} element={<Cart />} />
                <Route path={routes.ACCOUNT} element={<Account />} />
                <Route path={routes.FAVORITES} element={<Favorites />} />
                <Route path={routes.RESET} element={<Reset />} />
                <Route path={routes.SIGN_IN} element={<SignIn />} />
                <Route path={routes.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Routes>
    )
}
