import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Color } from "../../ui";

export const StyledModalWindow = styled.div`
  position: absolute;
  z-index: 10;
  right: 30px;
  bottom: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Color.PRIMARY};
  border: 1px solid ${Color.SECONDARY};
  border-radius: 10px;
`;

export const Title = styled.p`
  margin: 15px 10px;

  font-size: 18px;
  font-weight: 700;
  color: ${Color.LIGHT};
`;

export const CloseButton = styled(AiOutlineClose)`
  margin-right: 15px;
  cursor: pointer;
`;
