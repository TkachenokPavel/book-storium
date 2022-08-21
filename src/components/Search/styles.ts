import styled from 'styled-components';
import search from '../../assets/icons/search.svg'
import { Color, Media } from '../../ui';

export const StyledSearch = styled.input`
  width: 45%;
  padding: 10px 35px;

  background: url(${search}) no-repeat 10px 10px;
  border: none;
  border-bottom: 2px solid ${Color.PRIMARY2};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${Color.PRIMARY};
  }

  ${Media.MD} {
    width: 60%;
    margin-right: 70px;
  }

  ${Media.SM} {
    width: 90%;
    margin: 0;
  }
`;