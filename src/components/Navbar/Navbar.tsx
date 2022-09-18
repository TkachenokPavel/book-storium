import { NavbarList, NavbarMobileList, StyledNavbar, StyledNavbarMobile } from "./styles";
import { CartIcon, FavoriteIcon, AccountIcon } from "../../assets";
import { NavbarItem } from "../NavbarItem";
import { ROUTE } from "../../router/routes";
import { Link, Route, useNavigate } from "react-router-dom";
import { Search } from "../Search";
import { CloseNavbar } from "../CloseNavbar";
import { useToggle, useWindiwSize } from "../../hooks";
import { NavbarMobileItem } from "../NavbarMobileItem";

export const Navbar = () => {
  const [isOpen, toggleIsOpen] = useToggle();
  const { width = 0 } = useWindiwSize();
  const navigate = useNavigate();

  const handleClose = () => {
    toggleIsOpen();
  };

  const handleCart = () => {
    toggleIsOpen();
    navigate(`${ROUTE.CART}`);
  };
  const handleFavorites = () => {
    toggleIsOpen();
    navigate(`${ROUTE.FAVORITES}`);
  };
  const handleAccount = () => {
    toggleIsOpen();
    navigate(`${ROUTE.ACCOUNT}`);
  };

  const variants = {
    open: { x: 0 },
    closed: { x: "-800px" },
  };

  if (width < 576) {
    return (
      <>
        <StyledNavbarMobile animate={isOpen ? "open" : "closed"} variants={variants}>
          <Search handleClose={handleClose} />
          <NavbarMobileList>
            <NavbarMobileItem text="favorites" onClick={handleFavorites} />
            <NavbarMobileItem text="cart" onClick={handleCart} />
            <NavbarMobileItem text="account" onClick={handleAccount} />
          </NavbarMobileList>
        </StyledNavbarMobile>
        <CloseNavbar handleClose={handleClose} />
      </>
    );
  }

  return (
    <>
      <StyledNavbar>
        <Search handleClose={handleClose} />
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
    </>
  );
};
