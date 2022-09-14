import { ReactNode } from "react";
import ReactDOM from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  MODAL_SMALL = "modal-small",
}

interface IPortal {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ target, children }: IPortal) => {
  const root = document.getElementById(target);

  return root ? ReactDOM.createPortal(children, root) : null;
};
