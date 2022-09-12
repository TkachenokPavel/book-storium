import styled from 'styled-components';
import { Color, Media } from '../../ui';

export const StyledCartItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 200px;

  ${Media.MD} {
    height: 180px;
  };

  ${Media.SM} {
    flex-direction: column;

    height: auto;
  };

  & a:first-of-type{
    flex-shrink: 0;
    width: 170px;

    ${Media.SM} {
    align-self: center;
    width: 100%;
  };
  }
`;

export const Image = styled.img`
  width: 170px;
  height: 100%;

  background-color: ${Color.GREEN};

  ${Media.MD} {
    width: 100%;
  };
`;