import { useAppSelector } from "../store/hooks";
import { getUser } from "../store";

export const useAuth = (): boolean => {
  const { currentUser } = useAppSelector(getUser);

  return !!currentUser.email;
};
