import styled from "styled-components";
import { Color, Media } from "../../ui";

export const StyledModeSwitcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${Color.BLACK};

  cursor: pointer;
  ${Media.MD} {
    order: 5;
    margin-top: 40px;
  } ;
`;

export const ModeTheme = styled.p`
  text-transform: uppercase;
`;
