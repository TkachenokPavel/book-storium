import { StyledHeader } from "./styles";
import { Navbar } from "../Navbar";
import { LogoIcon } from "../../assets";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router/routes";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      <Navbar />
    </StyledHeader>
  );
};
