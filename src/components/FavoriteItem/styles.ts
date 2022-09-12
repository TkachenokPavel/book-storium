import styled from 'styled-components';
import { BODY, BODY2, Color, H3 } from '../../ui';

export const StyledItem = styled.li`
  position: relative;

  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  height: 100%;

  background-color: ${Color.BLUE};
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 64px;
`;

export const Title = styled.h3`
  margin-bottom: 24px;

  ${H3};
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 0.8px;
`;

export const Authors = styled.p`
  margin-bottom: 24px;

  ${BODY};
`;

export const PriceAndRating = styled.div`
  display: flex;
`;

export const Price = styled.span`
  width: 200px;

  ${H3};
  letter-spacing: 0.8px;
`;

export const ButtonRemove = styled.button`
  position: absolute;
  right: 0;
  bottom: 40%;

  width: 40px;
  height: 40px;

  background: transparent;
  border: none;
`;

export const Separator = styled.hr`
  width: 100%;
`;