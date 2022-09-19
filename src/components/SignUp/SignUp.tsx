import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  ConfirmLabel,
  EmailLabel,
  ErrorMessage,
  InputConfirm,
  InputEmail,
  InputPassword,
  PasswordLabel,
  StyledForm,
} from "./styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getUser,
  removeIsLoading,
  setError,
  setIsLoading,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import CircleLoader from "react-spinners/CircleLoader";
import { CSSProperties, useEffect, useRef } from "react";
import { getFirebaseMessageError } from "../../utils/firebaseError";
import { Color } from "../../ui";

export type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const override: CSSProperties = {
  display: "block",
};

interface IProps {
  isOpen: boolean;
  toggleModal: () => void;
}

export const SignUp = ({ isOpen, toggleModal }: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(getUser);

  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
    dispatch(setIsLoading());

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        reset();
        dispatch(removeIsLoading());
        toggleModal();
      })
      .catch((error) => {
        dispatch(setError(getFirebaseMessageError(error.code)));
      });
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => toggleModal(), 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen, toggleModal]);

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
            pattern: {
              value:
                // eslint-disable-next-line max-len
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
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
            minLength: {
              value: 6,
              message: "Password cannot be less than 6 symbols",
            },
            maxLength: {
              value: 20,
              message: "Password cannot be more than 20 symbols",
            },
          })}
        />
      </PasswordLabel>
      {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

      <ConfirmLabel>
        confirm password
        <InputConfirm
          type="password"
          placeholder="Confirm your password"
          {...register("passwordConfirm", {
            required: {
              value: true,
              message: "Confirm your password",
            },
            validate: (value: string) => value === password.current || "Repeat your password",
          })}
        />
      </ConfirmLabel>
      {errors.passwordConfirm && <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Button type="submit">
        {isLoading ? (
          <CircleLoader
            loading={isLoading}
            cssOverride={override}
            size={30}
            color={Color.BACKGROUND}
          />
        ) : (
          "sign up"
        )}
      </Button>
    </StyledForm>
  );
};
