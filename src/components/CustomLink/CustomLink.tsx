import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router/routes";

interface IProps {
  to: ROUTE;
  children: ReactNode;
}

export const CustomLink = ({ to, children }: IProps) => {
  return <Link to={to}>{children}</Link>;
};
