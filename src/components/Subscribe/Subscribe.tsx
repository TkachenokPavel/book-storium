import {
  StyledSubscribe,
  Description,
  InputWrapper,
  Input,
  ButtonSubscribe,
  Title,
} from "./styles";

export const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Title>Subscribe to Newsletter</Title>
      <Description>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </Description>
      <InputWrapper>
        <Input placeholder="Your Email" />
        <ButtonSubscribe>Subscribe</ButtonSubscribe>
      </InputWrapper>
    </StyledSubscribe>
  );
};
