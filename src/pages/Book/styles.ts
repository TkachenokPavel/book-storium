import styled from 'styled-components';
import { BODY, BODY2, Color, H2, H3 } from '../../ui';

export const StyledBook = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
`;

export const BookImage = styled.img`
  width: 40%;

  background-color: ${Color.ORANGE};
`;

export const BookDetails = styled.div`
  width: 50%;
  padding: 20px 0;

  border-top: 2px solid ${Color.GREY};
`;

export const DetailsPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 40px 0 25px 0;
`;

export const Price = styled.span`
  ${H2}
`;

export const DetailsRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const DetailsTitle = styled.span`
  ${BODY};
  color: ${Color.SECONDARY};
`;

export const DetailesDescription = styled.span`
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
`;