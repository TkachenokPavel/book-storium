import styled from 'styled-components';
import search from '../../assets/icons/search.svg'
import { Color, Media } from '../../ui';

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  ${Media.MD} {
    width: 60%;
    margin-right: 70px;
  }

  ${Media.SM} {
    width: 90%;
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;

  border: none;
  border-bottom: 2px solid ${Color.GREY};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${Color.PRIMARY};
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;

  background: url(${search}) no-repeat center center;
  border: none;
`;
