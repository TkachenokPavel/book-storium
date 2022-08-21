import styled from 'styled-components';
import { Color } from '../../ui';

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap:20px;
  margin-top: 60px;
`;

export const NavbarItem = styled.li`
  
`;

export const NavbarWrapper = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};

  position: absolute;
  right: ${({ $isOpen }) => $isOpen ? '-40px' : '-500px'};
  top: 0;
  z-index: 10;

  width: 50vw;
  min-width: 250px;
  height: 100vh;
  
  background: ${Color.LIGHT};
`;