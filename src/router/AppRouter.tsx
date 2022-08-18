import { Routes, Route } from "react-router-dom";
import { Home, Book, Cart, Account, Favorites, Reset, SignIn, Search } from "../pages";

export const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/sign-in" element={<SignIn />} />
    </Routes>
}
