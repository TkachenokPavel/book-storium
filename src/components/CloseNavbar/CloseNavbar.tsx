import { AiOutlineMenu } from "react-icons/ai";

interface IProps {
  handleClose: () => void;
}

export const CloseNavbar = ({ handleClose }: IProps) => {
  return (
    <AiOutlineMenu
      onClick={handleClose}
      style={{
        position: "absolute",
        right: "20",
        top: "30",
        cursor: "pointer",
      }}
    />
  );
};
