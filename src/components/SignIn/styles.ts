import styled from 'styled-components';
import { BODY, BODY2, Color, H3 } from '../../ui';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 32px;
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
`;

export const InputPassword = styled.input`
  width: 100%;
  height: 56px;
  margin: 8px 0px 8px;
  padding-left: 15px;

  ${BODY};

  border: 1px solid ${Color.GREY};

  &:focus {
    outline: none;
    border-color: ${Color.PRIMARY_LIGHT};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 40px;

  ${H3};
  text-transform: uppercase;
  color: ${Color.LIGHT};

  background-color: ${Color.PRIMARY};
`;

export const EmailLabel = styled.label`

  ${BODY2};
  text-transform: capitalize;
`;

export const PasswordLabel = styled.label`
  margin: 16px 0px 4px;

  ${BODY2};
  text-transform: capitalize;
`;