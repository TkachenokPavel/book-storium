import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import {
  HomePage,
  BookDetailsPage,
  CartPage,
  AccountPage,
  FavoritesPage,
  ResetPage,
  AuthenticationPage,
  SearchPage,
  NotFoundPage,
} from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.BOOK_DETAILS} element={<BookDetailsPage />} />

        <Route path={ROUTE.AUTHENTICATION} element={<AuthenticationPage />} />
        <Route path={`${ROUTE.AUTHENTICATION}/${ROUTE.RESET}`} element={<ResetPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={ROUTE.CART} element={<CartPage />} />
          <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
