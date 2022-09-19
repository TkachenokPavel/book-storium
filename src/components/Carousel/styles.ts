import styled from "styled-components";
import { Color, H2, Media } from "../../ui";

export const StyledCarousel = styled.div`
  width: 100%;
  margin-bottom: 50px;
  padding: 0 40px;

  ${Media.SM} {
    padding: 0 20px;
  }
  .slick-track {
    margin-top: 20px;
  }
  .slick-arrow.slick-prev {
    z-index: 100;
  }
  .slick-prev:before {
    color: ${Color.BLACK};
    @media (max-width: 800px) {
      z-index: 1;
    }
  }
  .slick-next:before {
    color: ${Color.BLACK};
  }
`;

export const Title = styled.h3`
  margin-left: -40px;

  ${H2};
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;

  ${Media.SM} {
    margin-left: -20px;
  }
`;
