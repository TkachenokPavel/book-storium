import { StyledHeader } from "./styles"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Search } from "../Search";
import { Navbar } from "../Navbar";
import { useWindiwSize } from "../../hooks/useWindowSize";
import { NavbarMobile } from "../NavbarMobile/NavbarMobile";

export const Header = () => {
    const { width } = useWindiwSize();

    return (
        <StyledHeader>
            <Logo />
            <Search />
            {width && width > 768
                ? <Navbar />
                : <NavbarMobile></NavbarMobile>}
        </StyledHeader>
    )
}
