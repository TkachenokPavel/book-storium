import styled from "styled-components";
import { H3, Media } from "../../ui";

export const StyledBooksList = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;

  width: 100%;
  margin-bottom: 72px;
  margin-top: 50px;

  ${Media.SM} {
    margin-top: 20px;
  }
`;

export const ErrorMassage = styled.p`
  ${H3}
  margin-top: 50px;
`;
