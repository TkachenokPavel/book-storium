import { motion } from "framer-motion";
import styled from "styled-components";
import { CloseIcon } from "../../assets";
import { BODY, Color, H3, Media } from "../../ui";

export const StyledCartItem = styled.li`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 200px;

  ${Media.MD} {
    height: 180px;
  }

  ${Media.SM} {
    flex-direction: column;

    height: auto;
  }

  & > a {
    flex-shrink: 0;
    width: 170px;

    ${Media.SM} {
      align-self: center;
      width: 100%;
    }
  }
`;

export const Image = styled.img`
  width: 170px;
  height: 100%;

  background-color: ${Color.GREEN};

  ${Media.MD} {
    width: 100%;
  } ;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 100%;
  padding: 20px 64px;

  ${Media.MD} {
    padding: 20px 24px;
  }

  ${Media.SM} {
    width: 100%;
    padding: 0;
    margin-top: 24px;
  } ;
`;

export const Title = styled.h3`
  width: 100%;
  margin-bottom: 24px;

  ${H3};
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.8px;

  ${Media.SM} {
    margin-bottom: 14px;
  } ;
`;

export const Authors = styled.p`
  margin-bottom: 24px;

  ${BODY};

  ${Media.SM} {
    margin-bottom: 14px;
  } ;
`;

export const PriceAndCounter = styled.div`
  display: flex;

  ${Media.SM} {
    justify-content: space-between;
  } ;
`;

export const Price = styled.span`
  margin-left: 30%;

  ${H3};
  letter-spacing: 0.8px;

  ${Media.MD} {
    width: 40%;
  } ;
`;

export const ButtonRemove = styled(motion.button)`
  position: absolute;
  right: 0;
  bottom: 40%;

  width: 40px;
  height: 40px;

  background: transparent;
  border: none;

  ${Media.MD} {
    right: 5%;
  } ;
`;

export const ButtonImage = styled(CloseIcon)`
  width: 100%;
`;

export const Separator = styled.hr`
  width: 100%;
`;
