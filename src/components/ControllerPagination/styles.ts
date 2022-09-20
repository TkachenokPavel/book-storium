import styled from "styled-components";
import { BODY, Color, Media } from "../../ui";

export const StyledControllerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;

  width: 100%;
  margin-bottom: 72px;
`;
export const Previous = styled.button`
  ${BODY};
  font-size: 21px;
  color: ${Color.SECONDARY};

  background-color: ${Color.BACKGROUND};
  border: none;

  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export const Next = styled.button`
  ${BODY};
  font-size: 21px;
  color: ${Color.SECONDARY};

  background-color: ${Color.BACKGROUND};
  border: none;

  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export const PrevText = styled.span`
  margin-left: 30px;

  color: ${Color.BLACK};
`;

export const NextText = styled.span`
  margin-right: 30px;
  color: ${Color.BLACK};
`;

export const PageCounter = styled.p`
  ${BODY};
  font-size: 18px;
  color: ${Color.PRIMARY};

  ${Media.SM} {
    width: 190px;
  }
`;
