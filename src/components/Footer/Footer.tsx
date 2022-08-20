import { Copyright, Rights, StyledFooter } from './styles'
import { ReactComponent as Logo } from '../../assets/logo.svg'

export const Footer = () => {
    return (
        <StyledFooter>
            <Logo style={{ width: 100 }} />
            <Copyright>©2022 Bookstore</Copyright>
            <Rights>All rights reserved</Rights>
        </StyledFooter>
    )
}
