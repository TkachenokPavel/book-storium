import { ReactNode } from "react";
import { StyledItem } from "./styles";

interface IProps {
  img: ReactNode;
}

export const NavbarItem = ({ img }: IProps) => {
  return <StyledItem>{img}</StyledItem>;
};
