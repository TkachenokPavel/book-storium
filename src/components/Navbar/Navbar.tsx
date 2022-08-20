import { NavbarList, StyledNavbar } from './styles';
import Cart from "../../assets/icons/cart.svg";
import Favorite from "../../assets/icons/favorite.svg";
import Account from "../../assets/icons/account.svg";
import { NavbarItem } from '../NavbarItem';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarList>
                <NavbarItem img={Favorite} key='favorite' />
                <NavbarItem img={Cart} key='cart' />
                <NavbarItem img={Account} key='account' />
            </NavbarList>
        </StyledNavbar>
    )
}
