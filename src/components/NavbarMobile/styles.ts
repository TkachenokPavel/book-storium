import styled from 'styled-components';
import { BODY2, Color } from '../../ui';

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap:20px;
  margin-top: 80px;
`;

export const NavbarItem = styled.li`
  ${BODY2}
`;

export const NavbarWrapper = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};

  position: absolute;
  right: -500px;
  top: 0;
  z-index: 10;

  width: 50vw;
  min-width: 250px;
  height: 100vh;
  
  background: ${Color.PURPLE};
  opacity: 0.95;
  transform: translateX(-480px);
`;