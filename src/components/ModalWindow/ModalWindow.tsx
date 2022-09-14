import { Portal } from "../Portal";
import { PortalTarget } from "../Portal/Portal";
import { CloseButton, StyledModalWindow, Title } from "./styles";

interface IProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

export const ModalWindow = ({ isOpen, handleCloseModal }: IProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL_SMALL}>
      <StyledModalWindow>
        <Title>Congratulations, you have successfully registered!</Title>
        <CloseButton
          style={{
            color: "white",
          }}
          onClick={() => handleCloseModal()}
        ></CloseButton>
      </StyledModalWindow>
    </Portal>
  ) : null;
};
