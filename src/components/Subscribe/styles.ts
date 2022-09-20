import { motion } from "framer-motion";
import styled from "styled-components";
import { BODY, H2, Media } from "../../ui";

export const StyledSubscribe = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 72px 0;
  padding: 56px 64px;

  background: #f4eefd;

  ${Media.MD} {
    padding: 40px;
  }

  ${Media.MD} {
    margin: 56px 0;
    padding: 24px;

    line-height: 30px;
  }
`;

export const Title = styled.h2`
  ${H2};
  font-family: "Bebas Neue", cursive;
  color: #313037;
`;

export const Description = styled.p`
  margin-bottom: 32px;

  ${BODY}
  color: #a8a8a8;
`;

export const Form = styled.form`
  display: flex;

  ${Media.SM} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 56px;
  padding-left: 20px;

  border: none;

  &::placeholder {
    color: #a8a8a8;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonSubscribe = styled(motion.button)`
  flex-basis: 150px;

  padding: 0;

  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;

  background: #313037;
  border-radius: 0px 2px 2px 0px;
  border: none;

  ${Media.SM} {
    flex-basis: 56px;
  }

  :hover {
    background: #5b5a62;
    transition: all 0.3s;
  }
`;
