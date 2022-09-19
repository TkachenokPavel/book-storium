import styled from "styled-components";
import { Color } from "../../ui";

export const StyledCarousel = styled.div`
  width: 100%;
  gap: 50px;
  .slick-track {
    margin-top: 20px;
  }
  .slick-slide {
    /* width: 400px !important; */
  }
  .slick-arrow.slick-prev {
    z-index: 100;
  }
  .slick-prev:before {
    color: ${Color.BLACK};
    @media (max-width: 800px) {
      margin-left: 20px;
      z-index: 1;
    }
  }
  .slick-next:before {
    color: ${Color.BLACK};
  }
`;
