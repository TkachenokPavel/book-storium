import styled from "styled-components";
import { Media } from "../../ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 40px;

  overflow: hidden;

  ${Media.MD} {
    padding: 0 20px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
`;
