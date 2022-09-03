import { SubmitHandler, useForm } from "react-hook-form";
import { Button, InputPassword, InputEmail, StyledForm, EmailLabel, PasswordLabel } from "./styles";

export type FormValues = {
    email: string,
    password: number
}

export const SignIn = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    return (
        <StyledForm >
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
            <Button>sign in</Button>
        </StyledForm>
    )
}
