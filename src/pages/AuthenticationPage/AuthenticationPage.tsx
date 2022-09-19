import { useState } from "react";
import { ModalWindow, SignIn, SignUp } from "../../components";
import { useToggle } from "../../hooks";
import {
  SignInSwitch,
  SignUpSwitch,
  StyledAuthenticationPage,
  SwitchWrapper,
  Wrapper,
} from "./styles";

export interface IFormSwitch {
  signIn: boolean;
  signUp: boolean;
}

export const AuthenticationPage = () => {
  const [formSwitch, setFormSwitch] = useState<IFormSwitch>({
    signIn: true,
    signUp: false,
  });
  const [isModalOpen, setIsModalOpen] = useToggle();

  const handleSignInSwitch = () => {
    setFormSwitch({
      signIn: true,
      signUp: false,
    });
  };

  const handleSignUpSwitch = () => {
    setFormSwitch({
      signIn: false,
      signUp: true,
    });
  };

  const handleModal = () => {
    setIsModalOpen();
  };

  return (
    <StyledAuthenticationPage>
      <Wrapper>
        <SwitchWrapper>
          <SignInSwitch $formSwitch={formSwitch.signIn} onClick={handleSignInSwitch}>
            sign in
          </SignInSwitch>
          <SignUpSwitch $formSwitch={formSwitch.signUp} onClick={handleSignUpSwitch}>
            sign up
          </SignUpSwitch>
        </SwitchWrapper>
        {formSwitch.signIn && <SignIn />}
        {formSwitch.signUp && <SignUp toggleModal={handleModal} isOpen={isModalOpen} />}
      </Wrapper>
      <ModalWindow isOpen={isModalOpen} handleCloseModal={handleModal} />
    </StyledAuthenticationPage>
  );
};
