import { ModeTheme, StyledModeSwitcher } from "./styles";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useAppSelector, getUser, useAppDispatch } from "../../store";
import {
  setThemeDark,
  setThemeLight,
} from "../../store/features/authentication/authenticationSlice";

export const ModeSwitcher = () => {
  const { theme } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    theme === "light" ? dispatch(setThemeDark()) : dispatch(setThemeLight());
  };

  return (
    <StyledModeSwitcher onClick={toggleTheme}>
      {theme === "light" ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
      <ModeTheme>{theme}</ModeTheme>
    </StyledModeSwitcher>
  );
};
