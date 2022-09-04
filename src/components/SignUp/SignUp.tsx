import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ConfirmLabel, EmailLabel, ErrorMessage, InputConfirm, InputEmail, InputName, InputPassword, NameLabel, PasswordLabel, StyledForm } from "./styles";

export type FormValues = {
    name: string
    email: string,
    password: string,
    passwordConfirm: string
}

export const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<FormValues> = ({ name, email, password, passwordConfirm }) => {
        console.log(name, email, password)
    }

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
                    type="password"
                    placeholder='Confirm your password'
                    {...register('passwordConfirm', {
                        required: {
                            value: true,
                            message: 'Confirm your password'
                        },
                    })}
                />
            </ConfirmLabel>
            {errors.passwordConfirm && <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>}

            <Button type='submit'>sign up</Button>
        </StyledForm>
    )
}
