import { CSSProperties, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CircleLoader from "react-spinners/CircleLoader";
import {
  Button,
  EmailLabel,
  ErrorMessage,
  InputEmail,
  NotificationReset,
  StyledResetForm,
  Title,
} from "./styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirebaseMessageError } from "../../utils/firebaseError";

type FormValues = {
  email: string;
};

const override: CSSProperties = {
  display: "block",
};

export const ResetForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = ({ email }) => {
    setIsLoading(true);

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("You have successfully reset your password, check your email");
      })
      .catch((error) => {
        setMessage(getFirebaseMessageError(error.code));
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <StyledResetForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Reset password</Title>
      {message && <NotificationReset> {message}</NotificationReset>}
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

      <Button>
        {isLoading ? (
          <CircleLoader loading={isLoading} cssOverride={override} size={30} color="white" />
        ) : (
          "Reset"
        )}
      </Button>
    </StyledResetForm>
  );
};
