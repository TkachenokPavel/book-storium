import { StyledHeader } from "./styles"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Search } from "../Search";
import { Navbar } from "../Navbar";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Search />
            <Navbar />
        </StyledHeader>
    )
}
