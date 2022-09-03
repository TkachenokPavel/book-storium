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
  box-shadow:  12px 12px 40px #9c9c9c,
             -12px -12px 40px #ffffff;
`;

export const Image = styled.img`
  width: 90%;

  border-bottom: 1px solid ${Color.GREY};
`;

export const Title = styled.h3`
  align-self: flex-start;

  ${BODY};
  text-indent: 15px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.05px;
  
  word-break: break-all;

  padding: 10px 20px;
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