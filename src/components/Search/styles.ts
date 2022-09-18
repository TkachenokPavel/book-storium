import styled from "styled-components";
import search from "../../assets/icons/search.svg";
import { Color, Media } from "../../ui";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  margin-right: 3%;

  ${Media.MD} {
    width: 60%;
    margin-left: 10%;
  }

  ${Media.SM} {
    width: 100%;
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

  ${Media.SM} {
    background: ${Color.PURPLE};
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;

  background: url(${search}) no-repeat center center;
  border: none;
`;
