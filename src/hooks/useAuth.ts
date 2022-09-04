import { useAppSelector } from "../store/hooks";
import { getUser } from "../store/selectors/authenticationSelector";

export const useAuth = (): boolean => {
    const { email } = useAppSelector(getUser)

    if (email) {
        return true
    } else return false
};