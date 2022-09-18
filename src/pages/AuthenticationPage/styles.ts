import styled from "styled-components";
import { Color, H3 } from "../../ui";

export const StyledAuthenticationPage = styled.div`
  display: grid;
  place-items: center;

  min-height: 80vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 544px;
  padding: 0px 32px 40px;

  border: 1px solid ${Color.GREY};
`;

export const SwitchWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 72px;
`;

export const SignInSwitch = styled.div<{ $formSwitch: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;

  ${H3};
  text-transform: uppercase;

  border-bottom: 1px solid;
  border-color: ${({ $formSwitch }) => ($formSwitch ? Color.PRIMARY : Color.SECONDARY)};
  color: ${({ $formSwitch }) => ($formSwitch ? Color.PRIMARY : Color.SECONDARY)};

  cursor: pointer;
`;

export const SignUpSwitch = styled.div<{ $formSwitch: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;

  ${H3};
  text-transform: uppercase;

  border-bottom: 1px solid;
  border-color: ${({ $formSwitch }) => ($formSwitch ? Color.PRIMARY : Color.SECONDARY)};
  color: ${({ $formSwitch }) => ($formSwitch ? Color.PRIMARY : Color.SECONDARY)};

  cursor: pointer;
`;
