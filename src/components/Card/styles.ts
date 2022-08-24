import styled from 'styled-components';
import { BODY, BODY2, Color } from '../../ui';

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 370px;

  border-radius: 15px;
  background: #F7F7F7;
  box-shadow:  12px 12px 13px #9c9c9c,
             -12px -12px 13px #ffffff;
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

  padding-top: 10px;
  padding-right: 10px;
  max-height: 50px;
`;