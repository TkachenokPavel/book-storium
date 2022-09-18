import styled from "styled-components";
import search from "../../assets/icons/search.svg";
import { Color, Media } from "../../ui";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  margin-right: 3%;
  margin-left: 20px;

  ${Media.MD} {
    width: 80%;
    margin: 0;
  }

  ${Media.SM} {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;

  background-color: ${Color.BACKGROUND};
  border: none;
  border-bottom: 2px solid ${Color.SECONDARY};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${Color.GREY};
  }

  ${Media.MD} {
    border-bottom: 2px solid ${Color.SECONDARY};
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
