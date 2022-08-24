import { NavbarList, StyledNavbar } from './styles';
import { Cart, Favorite, Account } from "../../assets";
import { NavbarItem } from '../NavbarItem';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarList>
                <NavbarItem img={<Favorite />} key='favorite' />
                <NavbarItem img={<Cart />} key='cart' />
                <NavbarItem img={<Account />} key='account' />
            </NavbarList>
        </StyledNavbar>
    )
}
