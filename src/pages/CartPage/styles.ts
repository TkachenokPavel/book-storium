import styled from "styled-components";
import { Color, H2, H3, Media } from "../../ui";

export const StyledCartPage = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  width: 100%;
  margin-top: 24px;
  margin-bottom: 48px;

  ${Media.MD} {
    gap: 32px;
    margin-top: 0;
  }
`;

export const EmptyCart = styled.h3`
  align-self: center;

  margin-top: 50px;

  ${H2};
  font-family: "Bebas Neue", cursive;
`;

export const ConfirmWrapper = styled.div`
  align-self: flex-end;

  width: 330px;

  ${Media.SM} {
    width: 100%;
  } ;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 36px;
`;

export const Total = styled.span`
  ${H3};
  font-family: "Bebas Neue", cursive;
`;

export const TotalPrice = styled.span`
  ${H3};
  font-family: "Bebas Neue", cursive;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px;

  ${H3};
  font-weight: 400;
  color: ${Color.LIGHT};
  text-transform: uppercase;

  background: ${Color.PRIMARY};

  ${Media.SM} {
    padding: 7px;
    font-size: 18px;
  }

  :hover {
    background: #5b5a62;
    transition: all 0.3s;
  }
`;
