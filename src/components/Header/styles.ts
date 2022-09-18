import styled from "styled-components";
import { Color, Media } from "../../ui";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 25px 0;
  height: 100px;

  border-bottom: 2px solid ${Color.GREY};

  ${Media.MD} {
    flex-direction: column;
    gap: 15px;
    height: 70px;
  }
`;
