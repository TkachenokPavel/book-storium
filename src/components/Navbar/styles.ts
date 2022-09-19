import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "../../ui";

export const StyledNavbar = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  gap: 30px;
`;

export const StyledNavbarMobile = styled(motion.nav)`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: calc(100vh - 70px);
  padding: 30px 15px;

  background-color: ${Color.PURPLE};
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 185px;
`;

export const NavbarItem = styled(motion.li)`
  position: relative;
`;

export const Amount = styled.span`
  position: absolute;
  top: 0;
  right: 0;

  width: 10px;
  height: 10px;

  background: ${Color.RED};
  color: white;
  border-radius: 50%;
`;

export const NavbarMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  margin-top: 40px;

  & > a {
    color: ${Color.PRIMARY};
  }
`;
