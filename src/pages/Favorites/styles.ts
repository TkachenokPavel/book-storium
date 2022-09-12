import styled from 'styled-components';
import { H2, H3 } from '../../ui';

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
`;

export const EmptyFavorites = styled.h3`
  ${H2}
`;