import { useAppSelector } from "../store/hooks";
import { getUser } from "../store/selectors/authenticationSelector";

export const useAuth = (): boolean => {
  const { currentUser } = useAppSelector(getUser);

  return !!currentUser.email;
};
