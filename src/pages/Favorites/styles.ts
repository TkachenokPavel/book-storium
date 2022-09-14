import styled from "styled-components";
import { H2, Media } from "../../ui";

export const StyledFavorites = styled.section`
  display: flex;
  flex-direction: column;
`;

export const FavoritesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  width: 100%;
  margin-top: 24px;
  margin-bottom: 48px;

  ${Media.MD} {
    gap: 32px;
    margin-top: 0;
  }
`;

export const EmptyFavorites = styled.h3`
  ${H2};
  font-family: "Bebas Neue", cursive;
`;
