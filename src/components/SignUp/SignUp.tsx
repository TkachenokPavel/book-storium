import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ConfirmLabel, EmailLabel, InputConfirm, InputEmail, InputName, InputPassword, NameLabel, PasswordLabel, StyledForm } from "./styles";

export type FormValues = {
    name: string
    email: string,
    password: number,
    passwordConfirm: number
}

export const SignUp = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    return (
        <StyledForm >
            <NameLabel>
                name
                <InputName
                    type="text"
                    placeholder='Your name'
                    {...register('name', {
                        required: true,
                        maxLength: {
                            value: 15,
                            message: 'MaxLength is 15'
                        }
                    })}
                />
            </NameLabel>
            <EmailLabel>
                email
                <InputEmail
                    type="email"
                    placeholder='Your email'
                    {...register('email', {
                        required: true,
                        maxLength: {
                            value: 15,
                            message: 'MaxLength is 15'
                        }
                    })}
                />
            </EmailLabel>
            <PasswordLabel>
                password
                <InputPassword
                    type="password"
                    placeholder='Your password'
                    {...register('password', {
                        required: true,
                        valueAsNumber: true,
                        maxLength: {
                            value: 5,
                            message: 'MaxLength is 5'
                        }
                    })}
                />
            </PasswordLabel>
            <ConfirmLabel>
                confirm password
                <InputConfirm
                    type="password"
                    placeholder='Confirm your password'
                    {...register('passwordConfirm', {
                        required: true,
                        valueAsNumber: true,
                        maxLength: {
                            value: 5,
                            message: 'MaxLength is 5'
                        }
                    })}
                />
            </ConfirmLabel>
            <Button>sign in</Button>
        </StyledForm>
    )
}
