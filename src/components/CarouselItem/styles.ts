import styled from "styled-components";
import { Color, H3 } from "../../ui";

export const StyledCarouselItem = styled.div`
  display: flex;
  flex-direction: column;

  width: 260px !important;
`;

export const Image = styled.img`
  width: 100%;

  background: ${Color.GREEN};
`;

export const Title = styled.p`
  margin-top: 10px;

  ${H3};
  font-family: "Bebas Neue", cursive;
`;
