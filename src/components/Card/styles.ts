import styled from 'styled-components';
import { BODY, BODY2, Color } from '../../ui';

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 370px;

  border: 1px solid ${Color.GREY};
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 90%;

  border-bottom: 1px solid ${Color.GREY};
`;

export const Title = styled.h3`
  ${BODY};
  line-height: 1;
  text-align: center;

  padding: 10px;
`;

export const Price = styled.p`
  ${BODY2};
  flex-grow: 1;
  align-self: flex-end;

  display: flex;
  align-self: flex-end;

  padding: 10px;
`;