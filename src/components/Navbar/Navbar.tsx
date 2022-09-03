import { NavbarList, StyledNavbar } from './styles';
import { Cart, Favorite, Account } from "../../assets";
import { NavbarItem } from '../NavbarItem';
import { ROUTE } from '../../router/routes';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarList>
                <Link to={ROUTE.FAVORITES}>
                    <NavbarItem img={<Favorite />} key='favorite' />
                </Link>
                <Link to={ROUTE.CART}>
                    <NavbarItem img={<Cart />} key='cart' />
                </Link>
                <Link to={ROUTE.AUTHENTICATION}>
                    <NavbarItem img={<Account />} key='account' />
                </Link>
            </NavbarList>
        </StyledNavbar>
    )
}
