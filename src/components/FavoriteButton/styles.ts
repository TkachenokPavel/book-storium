import styled from "styled-components";
import { Color } from "../../ui";

export const StyledFavoriteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  background: ${Color.PRIMARY};
  border: none;
`;
