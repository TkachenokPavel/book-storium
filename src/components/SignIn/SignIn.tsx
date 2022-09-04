import { SubmitHandler, useForm } from "react-hook-form";
import { Button, InputPassword, InputEmail, StyledForm, EmailLabel, PasswordLabel, ErrorMessage } from "./styles";

export type FormValues = {
    email: string,
    password: string
}

export const SignIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

    return (
        <StyledForm >
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
            <Button>sign in</Button>
        </StyledForm>
    )
}
