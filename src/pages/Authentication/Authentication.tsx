import { useState } from "react";
import { ModalWindow } from "../../components";
import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";
import { useToggle } from "../../hooks/useToggle";
import { SignInSwitch, SignUpSwitch, StyledAuthentication, SwitchWrapper, Wrapper } from "./styles";

export interface IFormSwitch {
  signIn: boolean;
  signUp: boolean;
}

export const Authentication = () => {
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
    <StyledAuthentication>
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
    </StyledAuthentication>
  );
};
