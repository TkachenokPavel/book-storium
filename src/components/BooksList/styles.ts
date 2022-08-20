import styled from 'styled-components';

export const StyledBooksList = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;

  width: 100%;
  margin-bottom: 30px;
`;