import { StyledHeader } from "./styles";
import { Search } from "../Search";
import { Navbar } from "../Navbar";
import { useWindiwSize } from "../../hooks/useWindowSize";
import { NavbarMobile } from "../NavbarMobile/NavbarMobile";
import { LogoIcon } from "../../assets";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router/routes";

export const Header = () => {
  const { width } = useWindiwSize();

  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      <Search />
      {width && width > 768 ? <Navbar /> : <NavbarMobile></NavbarMobile>}
    </StyledHeader>
  );
};
