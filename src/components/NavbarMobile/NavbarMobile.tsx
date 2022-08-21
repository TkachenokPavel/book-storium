import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavbarItem, NavbarList, NavbarWrapper } from './styles'



export const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <AiOutlineMenu
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'absolute',
                    right: '20',
                    top: '30',
                    cursor: 'pointer',
                }} />
            <NavbarWrapper $isOpen={isOpen}>
                <AiOutlineClose
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute',
                        right: '40',
                        top: '30',
                        cursor: 'pointer',
                    }} />
                <NavbarList >
                    <NavbarItem>ACCOUNT</NavbarItem>
                    <NavbarItem>CART</NavbarItem>
                    <NavbarItem>FAVORITE</NavbarItem>
                </NavbarList>
            </NavbarWrapper>

        </>
    )
}
