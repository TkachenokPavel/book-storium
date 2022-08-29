import { StyledHeader } from "./styles"
import { Search } from "../Search";
import { Navbar } from "../Navbar";
import { useWindiwSize } from "../../hooks/useWindowSize";
import { NavbarMobile } from "../NavbarMobile/NavbarMobile";
import { Logo } from "../../assets";

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
