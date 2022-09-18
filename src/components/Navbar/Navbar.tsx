import {
  NavbarList,
  NavbarMobileList,
  StyledNavbar,
  StyledNavbarMobile,
  NavbarItem,
} from "./styles";
import { CartIcon, FavoriteIcon, AccountIcon } from "../../assets";
import { ROUTE } from "../../router/routes";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "../Search";
import { CloseNavbar } from "../CloseNavbar";
import { useToggle, useWindiwSize } from "../../hooks";
import { NavbarMobileItem } from "../NavbarMobileItem";
import { ModeSwitcher } from "../ModeSwitcher";

const variants = {
  open: { x: 0 },
  closed: { x: "-800px" },
};

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

  if (width < 768) {
    return (
      <>
        <StyledNavbarMobile animate={isOpen ? "open" : "closed"} variants={variants}>
          <Search handleClose={handleClose} />
          <ModeSwitcher />
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
        <ModeSwitcher />
        <NavbarList>
          <Link to={ROUTE.FAVORITES}>
            <NavbarItem key="favorite">
              <FavoriteIcon fill="white" />
            </NavbarItem>
          </Link>
          <Link to={ROUTE.CART}>
            <NavbarItem key="cart">
              <CartIcon fill="white" />
            </NavbarItem>
          </Link>
          <Link to={ROUTE.ACCOUNT}>
            <NavbarItem key="account">
              <AccountIcon fill="white" />
            </NavbarItem>
          </Link>
        </NavbarList>
      </StyledNavbar>
    </>
  );
};
