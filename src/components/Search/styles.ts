import styled from 'styled-components';
import search from '../../assets/icons/search.svg'
import { Color } from '../../ui';

export const StyledSearch = styled.input`
  width: 45%;
  padding: 10px 35px;

  background: url(${search}) no-repeat 10px 10px;
  border: none;
  border-bottom: 2px solid ${Color.GREY};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${Color.PRIMARY2};
  }
`;