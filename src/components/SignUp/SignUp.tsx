import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ConfirmLabel, EmailLabel, ErrorMessage, InputConfirm, InputEmail, InputName, InputPassword, NameLabel, PasswordLabel, StyledForm } from "./styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeIsLoading, setError, setIsLoading } from "../../store/features/authentication/authenticationSlice";
import { getUser } from "../../store/selectors/authenticationSelector";
import CircleLoader from "react-spinners/CircleLoader";
import { CSSProperties, useEffect } from "react";
import { getFirebaseMessageError } from "../../utils/firebaseError";

export type FormValues = {
    name: string
    email: string,
    password: string,
    passwordConfirm: string
}

const override: CSSProperties = {
    display: "block",
}

interface IProps {
    isOpen: boolean
    toggleModal: () => void
}

export const SignUp = ({ isOpen, toggleModal }: IProps) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    });

    const dispatch = useAppDispatch();
    const { isLoading, error } = useAppSelector(getUser)

    const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
        dispatch(setIsLoading());

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                reset()
                dispatch(removeIsLoading());
                toggleModal();
            })
            .catch((error) => {
                dispatch(setError(getFirebaseMessageError(error.code)))
            });
    }

    useEffect(() => {
        if (isOpen) {
            let timer = setTimeout(() => toggleModal(), 5000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isOpen, toggleModal]);

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <NameLabel>
                name
                <InputName
                    type="text"
                    placeholder='Your name'
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Enter your name'
                        },
                    })}
                />
            </NameLabel>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            <EmailLabel>
                email
                <InputEmail
                    type="email"
                    placeholder='Your email'
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Enter your email'
                        },
                    })}
                />
            </EmailLabel>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <PasswordLabel>
                password
                <InputPassword
                    type="password"
                    placeholder='Your password'
                    {...register('password', {
                        required: {
                            value: true,
                            message: 'Enter your password'
                        },
                    })}
                />
            </PasswordLabel>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

            <ConfirmLabel>
                confirm password
                <InputConfirm
                    type="passwordConfirm"
                    placeholder='Confirm your password'
                    {...register('passwordConfirm', {
                        required: {
                            value: true,
                            message: 'Confirm your password'
                        }
                    })}
                />
            </ConfirmLabel>
            {errors.passwordConfirm && <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type='submit'>{
                isLoading
                    ? <CircleLoader loading={isLoading} cssOverride={override} size={30} color="white" />
                    : 'sign up'}
            </Button>
        </StyledForm>
    )
}
