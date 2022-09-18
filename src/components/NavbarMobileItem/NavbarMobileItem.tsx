import { StyledNavbarMobileItem } from "./styles";

interface IProps {
  text: string;
  onClick: () => void;
}

export const NavbarMobileItem = ({ text, onClick }: IProps) => {
  return <StyledNavbarMobileItem onClick={onClick}>{text}</StyledNavbarMobileItem>;
};
