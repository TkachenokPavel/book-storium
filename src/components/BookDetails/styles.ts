import styled from "styled-components";
import { Media, Color, H2, BODY, BODY2, H3, S1 } from "../../ui";

export const StyledBookDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 40%;

  ${Media.MD} {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;

  background-color: ${Color.ORANGE};
`;

export const BookDetailsList = styled.div`
  width: 50%;
  padding: 20px 0;

  border-top: 2px solid ${Color.GREY};

  ${Media.MD} {
    width: 100%;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 40px 0 25px 0;
`;

export const Price = styled.span`
  ${H2}
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const DetailsTitle = styled.span`
  ${BODY};
  color: ${Color.BLACK};
`;

export const Description = styled.span`
  max-width: 70%;

  ${BODY2}
  hyphens: auto;
`;

export const CartButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 40px;

  ${H3};
  color: ${Color.LIGHT};
  text-transform: uppercase;

  background: ${Color.PRIMARY};

  :hover {
    background: #5b5a62;
    transition: all 0.3s;
  }
`;

export const Preview = styled.a`
  display: block;

  margin-top: 24px;

  ${S1};
  text-align: center;
`;

export const MoreDetails = styled.span`
  display: inline-block;

  margin-top: 20px;

  font-weight: 700;

  cursor: pointer;
`;
