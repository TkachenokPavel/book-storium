import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CSSProperties } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { ROUTE } from "../../router/routes";
import {
  setIsLoading,
  setError,
  setUser,
} from "../../store/features/authentication/authenticationSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors/authenticationSelector";
import { getFirebaseMessageError } from "../../utils/firebaseError";
import {
  Button,
  InputPassword,
  InputEmail,
  StyledForm,
  EmailLabel,
  PasswordLabel,
  ErrorMessage,
  ResetPassword,
} from "./styles";

type FormValues = {
  email: string;
  password: string;
};

export type UserData = {
  email: string | null;
  created: string | null;
};

const override: CSSProperties = {
  display: "block",
};

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(getUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
    dispatch(setIsLoading());

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.metadata.creationTime) {
          dispatch(
            setUser({
              email: userCredential.user.email,
              created: userCredential.user.metadata.creationTime.slice(5),
            }),
          );
        }

        navigate(`/${ROUTE.ACCOUNT}`);
      })
      .catch((error) => {
        dispatch(setError(getFirebaseMessageError(error.code)));
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <EmailLabel>
        email
        <InputEmail
          type="email"
          placeholder="Your email"
          {...register("email", {
            required: {
              value: true,
              message: "Enter your email",
            },
          })}
        />
      </EmailLabel>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <PasswordLabel>
        password
        <InputPassword
          type="password"
          placeholder="Your password"
          {...register("password", {
            required: {
              value: true,
              message: "Enter your password",
            },
          })}
        />
      </PasswordLabel>
      {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Link to={ROUTE.RESET}>
        <ResetPassword>Forgot Password?</ResetPassword>
      </Link>

      <Button>
        {isLoading ? (
          <CircleLoader loading={isLoading} cssOverride={override} size={30} color="white" />
        ) : (
          "sign in"
        )}
      </Button>
    </StyledForm>
  );
};
