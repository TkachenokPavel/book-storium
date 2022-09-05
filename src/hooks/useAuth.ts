import { useAppSelector } from "../store/hooks";
import { getUser } from "../store/selectors/authenticationSelector";

export const useAuth = (): boolean => {
    const { user } = useAppSelector(getUser)

    return user.email ? true : false
};