import { SubmitHandler, useForm } from "react-hook-form";
import { StyledSubscribe, Description, Input, ButtonSubscribe, Title, Form } from "./styles";

type FormValues = {
  email: string;
};

export const Subscribe = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {
    reset();
  };

  return (
    <StyledSubscribe>
      <Title>Subscribe to Newsletter</Title>
      <Description>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Your Email"
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
        <ButtonSubscribe>Subscribe</ButtonSubscribe>
      </Form>
    </StyledSubscribe>
  );
};
