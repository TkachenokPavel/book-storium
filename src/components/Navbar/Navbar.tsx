import { NavbarList, StyledNavbar } from './styles';
import { Cart, Favorite, Account } from "../../assets";
import { NavbarItem } from '../NavbarItem';
import { ROUTE } from '../../router/routes';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { getUser } from '../../store/selectors/authenticationSelector';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

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
                <Link to={ROUTE.ACCOUNT}>
                    <NavbarItem img={<Account />} key='account' />
                </Link>
            </NavbarList>
        </StyledNavbar>
    )
}
