import styled from 'styled-components';
import { BODY, Color } from '../../ui';

export const StyledSearch = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ControlerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;

  width: 100%;
  margin-bottom: 72px;
`;

export const Previous = styled.button`
  ${BODY};
  font-size: 21px;
  color: ${Color.SECONDARY};

  background-color: #fff;
  border:none;

  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export const Next = styled.button`
  ${BODY};
  font-size: 21px;
  color: ${Color.SECONDARY};

  background-color: #fff;
  border:none;

  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export const PrevText = styled.span`
  margin-left: 30px;
`;

export const NextText = styled.span`
  margin-right: 30px;
`;