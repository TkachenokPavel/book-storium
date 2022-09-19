import styled from "styled-components";
import { BODY, BODY2, Color, H3, Media } from "../../ui";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 32px;

  ${Media.SM} {
    margin-top: 16px;
  }
`;

export const InputName = styled.input`
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

export const InputEmail = styled.input`
  width: 100%;
  height: 56px;
  margin: 8px 0px 16px;
  padding-left: 15px;

  ${BODY};
  color: #000000;
  border: 1px solid ${Color.GREY};

  &:focus {
    outline: none;
    border-color: ${Color.PRIMARY_LIGHT};
  }

  ${Media.SM} {
    height: 42px;
  }
`;

export const InputPassword = styled.input`
  width: 100%;
  height: 56px;
  margin: 8px 0px 8px;
  padding-left: 15px;

  ${BODY};

  border: 1px solid ${Color.GREY};
  color: #000000;

  &:focus {
    outline: none;
    border-color: ${Color.PRIMARY_LIGHT};
  }

  ${Media.SM} {
    height: 42px;
  }
`;

export const InputConfirm = styled.input`
  width: 100%;
  height: 56px;
  margin: 8px 0px 8px;
  padding-left: 15px;

  ${BODY};
  color: #000000;
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

  ${Media.SM} {
    margin-top: 20px;
  }

  :hover {
    background: #5b5a62;
    transition: all 0.3s;
  }
`;

export const NameLabel = styled.label`
  ${BODY2};
  text-transform: capitalize;
`;

export const EmailLabel = styled.label`
  ${BODY2};
  text-transform: capitalize;
`;

export const PasswordLabel = styled.label`
  margin: 16px 0px 4px;

  ${BODY2};
  text-transform: capitalize;

  ${Media.SM} {
    margin: 8px 0 4px;
  }
`;

export const ConfirmLabel = styled.label`
  margin: 16px 0px 4px;

  ${BODY2};
  text-transform: capitalize;

  ${Media.SM} {
    margin: 8px 0 4px;
  }
`;

export const ErrorMessage = styled.span`
  color: ${Color.RED};
`;
