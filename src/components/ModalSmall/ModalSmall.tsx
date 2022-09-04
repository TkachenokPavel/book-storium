import React from 'react'
import { Portal } from '../Portal'
import { PortalTarget } from '../Portal/Portal'
import { CloseButton, StyledModalSmall, Title } from './styles'

interface IProps {
    isOpen: boolean,
    handleCloseModal: () => void
}

export const ModalSmall = ({ isOpen, handleCloseModal }: IProps) => {
    return isOpen
        ? <Portal target={PortalTarget.MODAL_SMALL} >
            <StyledModalSmall>
                <Title>Congratulations, you have successfully registered!</Title>
                <CloseButton
                    style={{
                        color: "white"
                    }}
                    onClick={() => handleCloseModal()
                    }></CloseButton>
            </StyledModalSmall>
        </Portal >
        : null
}
