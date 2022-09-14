import styled from "styled-components";
import { DecreaseIcon, IncreaseIcon } from "../../assets";
import { H3 } from "../../ui";

export const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 170px;
`;

export const DecreaseButton = styled.button`
  background: transparent;
  border: none;
`;

export const IncreaseButton = styled.button`
  background: transparent;
  border: none;
`;

export const Amount = styled.span`
  ${H3};
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.8px;
`;

export const DecreaseButtonImage = styled(DecreaseIcon)`
  width: 100%;
`;

export const IncreaseButtonImage = styled(IncreaseIcon)`
  width: 100%;
`;
