import styled from "styled-components";
import { BODY, BODY2, Color } from "../../ui";
import { motion } from "framer-motion";

export const StyledCard = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 370px;

  border-radius: 15px;
  background: ${Color.LIGHT};
  box-shadow: 11px 11px 22px ${Color.SECONDARY}, -11px -11px 22px ${Color.BACKGROUND};
`;

export const Image = styled.img`
  width: 90%;

  border-bottom: 1px solid ${Color.GREY};
`;

export const Title = styled.h3`
  align-self: flex-start;

  ${BODY};
  font-family: "Bebas Neue", cursive;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.3px;

  padding: 10px 20px;
`;

export const Price = styled.p`
  ${BODY2};
  font-size: 21px;
  flex-grow: 1;
  align-self: flex-end;

  display: flex;
  align-self: flex-end;

  padding-top: 15px;
  padding-right: 15px;
  max-height: 50px;
`;
