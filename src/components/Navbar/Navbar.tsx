import { NavbarList, StyledNavbar } from "./styles";
import { CartIcon, FavoriteIcon, AccountIcon } from "../../assets";
import { NavbarItem } from "../NavbarItem";
import { ROUTE } from "../../router/routes";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarList>
        <Link to={ROUTE.FAVORITES}>
          <NavbarItem img={<FavoriteIcon />} key="favorite" />
        </Link>
        <Link to={ROUTE.CART}>
          <NavbarItem img={<CartIcon />} key="cart" />
        </Link>
        <Link to={ROUTE.ACCOUNT}>
          <NavbarItem img={<AccountIcon />} key="account" />
        </Link>
      </NavbarList>
    </StyledNavbar>
  );
};
