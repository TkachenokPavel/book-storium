import styled from "styled-components";
import { Color, Media } from "../../ui";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 0 30px;

  border-top: 2px solid ${Color.GREY};

  ${Media.SM} {
    padding: 0;
  }
`;

export const Copyright = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: ${Color.PRIMARY};
  text-align: center;
`;

export const Rights = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: ${Color.PRIMARY};
  text-align: center;
`;
