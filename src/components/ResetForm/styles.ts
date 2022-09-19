import styled from "styled-components";
import { BODY, BODY2, Color, H2, H3, Media } from "../../ui";

export const StyledResetForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 544px;
  padding: 0px 32px 40px;

  border: 1px solid ${Color.GREY};
  ${Media.SM} {
    width: 300px;
    padding: 0px 20px 30px;
  }
`;

export const EmailLabel = styled.label`
  ${BODY2};
  text-transform: capitalize;
`;

export const InputEmail = styled.input`
  width: 100%;
  height: 56px;
  margin: 8px 0px 16px;
  padding-left: 15px;

  ${BODY};

  border: 1px solid ${Color.GREY};

  &:focus {
    outline: none;
    border-color: ${Color.PRIMARY_LIGHT};
  }

  ${Media.SM} {
    height: 42px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 56px;
  margin-top: 40px;

  ${H3};
  text-transform: uppercase;
  color: ${Color.LIGHT};

  background-color: ${Color.PRIMARY};
`;

export const ErrorMessage = styled.p`
  color: ${Color.RED};
`;

export const Title = styled.h3`
  margin: 32px 0 16px;

  ${H2};
  font-family: "Bebas Neue", cursive;
`;

export const NotificationReset = styled.p`
  width: 100%;
  padding: 20px 10px;
  margin-bottom: 10px;

  background: ${Color.PURPLE};

  ${Media.SM} {
    padding: 10px 10px;
  }
`;
